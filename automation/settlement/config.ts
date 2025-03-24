import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

interface DatabaseConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

interface SettlementConfig {
  lookbackDays: number;
  batchSize: number;
}

interface Config {
  database: DatabaseConfig;
  settlement: SettlementConfig;
}

const config: Config = {
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
  },
  settlement: {
    lookbackDays: 7,
    batchSize: 100,
  },
};

export default config;
