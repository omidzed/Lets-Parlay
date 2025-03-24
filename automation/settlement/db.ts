import { Pool, QueryResult } from 'pg';
import config from './config';

const pool = new Pool({
  host: config.database.host,
  port: config.database.port,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database,
});

export interface DbInterface {
  query: (text: string, params?: any[]) => Promise<QueryResult>;
  pool: Pool;
}

const db: DbInterface = {
  query: (text, params) => pool.query(text, params),
  pool,
};

export default db;
