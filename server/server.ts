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
} from './lib/index.js';

type User = {
  userId: number;
  username: string;
  hashedPassword: string;
  name: string;
  funds: number;
};
type Auth = {
  username: string;
  password: string;
  name: string;
  funds: number;
};

type Bet = {
  eventId: number;
  betType: string;
  betAmount: number;
};

const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`;
const db = new pg.Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

const hashKey = process.env.TOKEN_SECRET;
if (!hashKey) throw new Error('TOKEN_SECRET not found in .env');

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.post('/api/auth/sign-up', async (req, res, next) => {
  try {
    const { username, password, name, funds } = req.body as Partial<Auth>;
    if (!username || !password || !name || !funds) {
      throw new ClientError(400, 'username and password are required fields');
    }

    const sql = `
      insert into "user" ("username", "hashedPassword", "name", "funds")
      values              ($1, $2, $3, $4)
      returning *;`;

    const hashedPassword = await argon2.hash(password);
    console.log(hashedPassword);
    const params = [username, hashedPassword, name, funds];
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
    select "userId",
           "hashedPassword",
           "name",
           "funds"
      from "user"
     where "username" = $1
  `;
    const params = [username];
    const result = await db.query<User>(sql, params);
    const [user] = result.rows;
    if (!user) {
      throw new ClientError(401, 'invalid login');
    }
    const { userId, hashedPassword, name, funds } = user;
    if (!(await argon2.verify(hashedPassword, password))) {
      throw new ClientError(401, 'invalid login');
    }
    const payload = { userId, username, name, funds };
    const token = jwt.sign(payload, hashKey);
    console.log(token);
    res.json({ token, user: payload });
  } catch (err) {
    next(err);
  }
});

app.get('/api/bets', authMiddleware, async (req, res, next) => {
  try {
    const sql = `
      select * from "bets"
        where "userId" = $1
        order by "betId" desc;
    `;
    const result = await db.query<User>(sql, [req.user?.userId]);
    res.status(201).json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.post('/api/bets', authMiddleware, async (req, res, next) => {
  try {
    const { eventId, betType, betAmount } = req.body as Partial<Bet>;
    if (!eventId || !betType || !betAmount) {
      throw new ClientError(
        400,
        'eventId, betType, and betAmount are required fields'
      );
    }
    const sql = `
      insert into "bets" ("userId", "eventId", "betType", "betAmount")
        values ($1, $2, $3, $4)
        returning *;
    `;
    const params = [req.user?.userId, eventId, betType, betAmount];
    const result = await db.query<Bet>(sql, params);
    const [bet] = result.rows;
    res.status(201).json(bet);
  } catch (err) {
    next(err);
  }
});

app.put('/api/bets/:betId', authMiddleware, async (req, res, next) => {
  try {
    const betId = Number(req.params.betId);
    const { eventId, betType, betAmount } = req.body as Partial<Bet>;
    if (!Number.isInteger(betId) || !eventId || !betType || !betAmount) {
      throw new ClientError(
        400,
        'eventId, betType, and betAmount are required fields'
      );
    }
    const sql = `
      update "bets"
        set "eventId" = $1,
            "betType" = $2,
            "betAmount" = $3
        where "betId" = $4 and "userId" = $5
        returning *;
    `;
    const params = [eventId, betType, betAmount, betId, req.user?.userId];
    const result = await db.query<Bet>(sql, params);
    const [bet] = result.rows;
    if (!bet) {
      throw new ClientError(404, `Bet with id ${betId} not found`);
    }
    res.status(201).json(bet);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/bets/:betId', authMiddleware, async (req, res, next) => {
  try {
    const betId = Number(req.params.betId);
    if (!Number.isInteger(betId)) {
      throw new ClientError(400, 'betId must be an integer');
    }
    const sql = `
      delete from "bets"
        where "betId" = $1 and "userId" = $2
        returning *;
    `;
    const params = [betId, req.user?.userId];
    const result = await db.query<Bet>(sql, params);
    const [deleted] = result.rows;
    if (!deleted) {
      throw new ClientError(404, `Bet with id ${betId} not found`);
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

/*
 * Middleware that handles paths that aren't handled by static middleware
 * or API route handlers.
 * This must be the _last_ non-error middleware installed, after all the
 * get/post/put/etc. route handlers and just before errorMiddleware.
 */
app.use(defaultMiddleware(reactStaticDir));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
