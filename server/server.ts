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
import type {User, Auth, Bet} from '../client/src/utils/data-types.js'


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
    const { name, username, password } = req.body as Partial<Auth>;
    if (!name || !username || !password) {
      throw new ClientError(
        400,
        'Name, username and password are required for registration!'
      );
    }

    const sql = `
      insert into "users" ("name", "username", "hashedPassword", "funds")
      values              ($1, $2, $3, $4)
      returning *;`;

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
    select "userId",
           "name",
           "hashedPassword",
           "funds"
      from "users"
     where "username" = $1
  `;
    const params = [username];
    const result = await db.query<User>(sql, params);
    const [user] = result.rows;
    if (!user) {
      throw new ClientError(401, 'invalid login');
    }
    const { userId, name, hashedPassword, funds } = user;
    if (!(await argon2.verify(hashedPassword, password))) {
      throw new ClientError(401, 'invalid login');
    }
    const payload = { userId, name, username, funds };
    const token = jwt.sign(payload, hashKey, { expiresIn: '1h' });
    res.json({ token, user: payload });
  } catch (err) {
    next(err);
  }
});

app.post('/api/bets', authMiddleware, async (req, res, next) => {
  try {
    const { pick, dateTime, betType, betAmount } =
      req.body as Partial<Bet>;

    if (!betType || betAmount === null) {
      throw new ClientError(400, 'betType, and betAmount are required fields');
    }

    const sql = `
      insert into "bets" ("userId", "pick", "dateTime" , "betType", "betAmount")
        values ($1, $2, $3, $4, $5)
        returning *;
    `;
    const params = [
      req.user.userId,
      pick,
      dateTime,
      betType,
      betAmount,
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

// app.post('/api/bets', authMiddleware, async (req, res, next) => {
//   try {
//     const { eventId, betType, betAmount } = req.body as Partial<Bet>;
//     if (!eventId || !betType || !betAmount) {
//       throw new ClientError(
//         400,
//         'eventId, betType, and betAmount are required fields'
//       );
//     }
//     const sql = `
//       insert into "bets" ("userId", "eventId", "betType", "betAmount")
//         values ($1, $2, $3, $4)
//         returning *;
//     `;
//     const params = [req.user?.userId, eventId, betType, betAmount];
//     const result = await db.query<Bet>(sql, params);
//     const [bet] = result.rows;
//     res.status(201).json(bet);
//   } catch (err) {
//     next(err);
//   }
// });

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
