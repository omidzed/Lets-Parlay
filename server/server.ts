// Force IPv4 preference at the Node layer (helps on modern Node)
import { setDefaultResultOrder } from 'dns';
setDefaultResultOrder('ipv4first');

import dns from 'node:dns/promises';
import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import {
  ClientError,
  defaultMiddleware,
  errorMiddleware,
  authMiddleware,
  adminMiddleware,
} from './lib/index.js';
import type { User, Auth, Bet } from '../client/src/utils/data-types.js';

async function main() {
  // --- Build a DB URL that *always* connects over IPv4, while keeping TLS SNI ---
  const raw =
    process.env.DATABASE_URL ??
    `postgresql://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`;

  if (!raw) throw new Error('DATABASE_URL is missing');

  const url = new URL(raw);
  const sniHost = url.hostname;               // keep original hostname for TLS SNI
  const [ipv4] = await dns.resolve4(sniHost); // pick an IPv4 record
  url.hostname = ipv4;                         // connect to IPv4 directly

  const db = new pg.Pool({
    connectionString: url.toString(),
    ssl: { rejectUnauthorized: false, servername: sniHost }, // SNI stays the original host
  });

  const hashKey = process.env.TOKEN_SECRET;
  if (!hashKey) throw new Error('TOKEN_SECRET not found in .env');

  const app = express();

  const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
  const uploadsStaticDir = new URL('public', import.meta.url).pathname;

  app.use(express.static(reactStaticDir));
  app.use(express.static(uploadsStaticDir));
  app.use(express.json());

  // Simple health check (returns JSON 200 instead of serving index.html)
  app.get('/health', (_req, res) => res.status(200).json({ ok: true }));

  app.post('/api/auth/sign-up', async (req, res, next) => {
    try {
      const { name, username, password } = req.body as Partial<Auth>;
      if (!name || !username || !password) {
        throw new ClientError(
          400,
          'Name, username and password are required for registration!'
        );
      }

      const sql = `
        INSERT INTO "users" ("name", "username", "hashedPassword", "funds")
        VALUES ($1, $2, $3, $4)
        RETURNING *;`;

      const hashedPassword = await argon2.hash(password);
      const funds = 5000;
      const params = [name, username, hashedPassword, funds];
      const result = await db.query<User>(sql, params);
      const [user] = result.rows;
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  });

  app.post('/api/auth/login', async (req, res, next) => {
    try {
      const { username, password } = req.body as Partial<Auth>;
      if (!username || !password) {
        throw new ClientError(401, 'invalid login');
      }
      const sql = `
        SELECT "userId","name","hashedPassword","funds","isAdmin"
          FROM "users"
         WHERE "username" = $1`;
      const params = [username];
      const result = await db.query<User>(sql, params);
      const [user] = result.rows;
      if (!user) throw new ClientError(401, 'invalid login');

      const { userId, name, hashedPassword, funds, isAdmin } = user;
      if (!(await argon2.verify(hashedPassword, password))) {
        throw new ClientError(401, 'invalid login');
      }
      const payload = { userId, name, username, funds, isAdmin };
      const token = jwt.sign(payload, hashKey, { expiresIn: '2h' });
      res.json({ token, user: payload });
    } catch (err) {
      next(err);
    }
  });

  app.post('/api/auth/guest-check-in', async (req, res, next) => {
    try {
      const { username, password } = req.body as Partial<Auth>;
      if (!username || !password) {
        throw new ClientError(400, 'Username and password are required');
      }

      const sql = `
        SELECT "userId","name","hashedPassword","funds","isAdmin"
          FROM "users"
         WHERE "username" = $1`;
      const params = [username];
      const result = await db.query<User>(sql, params);
      const user = result.rows[0];
      if (!user) throw new ClientError(401, 'Invalid credentials');

      const { userId, name, hashedPassword, funds, isAdmin } = user;
      if (!(await argon2.verify(hashedPassword, password))) {
        throw new ClientError(401, 'Invalid credentials');
      }

      const payload = { userId, name, username, funds, isAdmin };
      const token = jwt.sign(payload, hashKey, { expiresIn: '2h' });
      res.json({ token, user: payload });
    } catch (err) {
      next(err);
    }
  });

  app.post('/api/bets', authMiddleware, async (req, res, next) => {
    try {
      const { pick, dateTime, betType, betAmount, payout } =
        req.body as Partial<Bet>;

      if (!betType || betAmount === null) {
        throw new ClientError(400, 'betType, and betAmount are required fields');
      }

      const sql = `
        INSERT INTO "bets" ("userId","pick","dateTime","betType","betAmount","payout")
        VALUES ($1,$2,$3,$4,$5,$6)
        RETURNING *;`;
      const params = [
        req.user.userId,
        pick,
        dateTime,
        betType,
        betAmount,
        payout,
      ];
      const result = await db.query<Bet>(sql, params);
      const [bet] = result.rows;
      res.status(201).json(bet);
    } catch (err) {
      next(err);
    }
  });

  app.get('/api/bets', authMiddleware, async (req, res, next) => {
    try {
      const sql = `
        SELECT * FROM "bets"
         WHERE "userId" = $1
         ORDER BY "betId" DESC;`;
      const result = await db.query<User>(sql, [req.user?.userId]);
      res.status(200).json(result.rows);
    } catch (err) {
      next(err);
    }
  });

  app.post('/api/create-admin', async (req, res, next) => {
    try {
      const { name, username, password, hashKey: bodyHashKey } = req.body;
      if (!name || !username || !password || !bodyHashKey) {
        throw new ClientError(400, 'Name, username and password are required');
      }

      const hashedPassword = await argon2.hash(password);
      const sql = `
        INSERT INTO "users" ("name","username","hashedPassword","funds","isAdmin")
        VALUES ($1,$2,$3,$4,$5)
        RETURNING *;`;
      const params = [name, username, hashedPassword, 5000, true];
      const result = await db.query(sql, params);
      const [user] = result.rows;
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  });

  app.get('/api/admin/bets', authMiddleware, adminMiddleware, async (_req, res, next) => {
    try {
      const sql = `SELECT * FROM "bets" ORDER BY "betId" DESC;`;
      const result = await db.query(sql);
      res.status(200).json(result.rows);
    } catch (err) {
      next(err);
    }
  });

  app.patch('/api/admin/bets/:betId', authMiddleware, adminMiddleware, async (req, res, next) => {
    const { betId } = req.params;
    const { winner, status } = req.body;

    const validStatuses = ['open', 'closed', 'canceled'];
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value provided.' });
    }

    try {
      const sql = `
        UPDATE "bets"
           SET "winner" = COALESCE($1,"winner"),
               "status" = COALESCE($2,"status")
         WHERE "betId" = $3
         RETURNING *;`;
      const params = [winner, status, betId];
      const result = await db.query(sql, params);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Bet not found' });
      }

      const bet = result.rows[0];

      if (winner) {
        const updateFundsSql = `
          UPDATE "users"
             SET "funds" = "funds" + $1
           WHERE "userId" = $2
           RETURNING "funds";`;
        const fundsResult = await db.query(updateFundsSql, [bet.payout, bet.userId]);
        bet.updatedFunds = fundsResult.rows[0].funds;
      }

      res.status(200).json(bet);
    } catch (err) {
      console.error('Error updating bet:', err);
      next(err);
    }
  });

  app.patch('/api/users/update-funds', authMiddleware, async (req, res, next) => {
    const { userId, newFunds } = req.body;

    if (!userId || newFunds === undefined) {
      return res
        .status(400)
        .json({ message: 'User ID and new funds amount are required.' });
    }

    const sql = `
      UPDATE "users"
         SET "funds" = $2
       WHERE "userId" = $1
       RETURNING *;`;

    try {
      const params = [userId, newFunds];
      const result = await db.query(sql, params);
      if (result.rows.length === 0) {
        throw new ClientError(404, 'User not found');
      }
      res.status(200).json(result.rows[0]);
    } catch (err) {
      console.error('Error updating funds:', err);
      next(err);
    }
  });

  // SPA fallback must be last non-error middleware
  app.use(defaultMiddleware(reactStaticDir));
  app.use(errorMiddleware);

  const port = Number(process.env.PORT ?? 8080);
  app.listen(port, () => {
    process.stdout.write(`\n\napp listening on port ${port}\n\n`);
  });
}

main().catch((err) => {
  console.error('Fatal startup error:', err);
  process.exit(1);
});
