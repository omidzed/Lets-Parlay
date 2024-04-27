// import { Pool } from 'pg';
// import { config } from 'dotenv';
// import fs from 'fs';
// import path from 'path';

// // Determine the correct path for environment variables based on NODE_ENV
// const envPath =
//   process.env.NODE_ENV === 'development'
//     ? '.env.local' // Local development-specific variables
//     : path.resolve(process.cwd(), 'server', '.env'); // Production or default environment variables

// // Configure environment variables from the determined path
// config({ path: envPath });

// // Database connection setup
// export const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl:
//     process.env.NODE_ENV === 'development'
//       ? {
//           // Conditional SSL configuration for production
//           rejectUnauthorized: true,
//           ca: fs
//             .readFileSync('/path/to/server-certificates/root.crt')
//             .toString(),
//         }
//       : false,
// });

// import { Pool } from 'pg';
// import { config } from 'dotenv';
// import fs from 'fs';

// try {
//   config({ path: `.env.${process.env.NODE_ENV || 'development'}` });
// } catch (error) {
//   console.error('Error loading environment variables:', error);
//   process.exit(1); // Or throw an error to stop application startup
// }

// if (!process.env.DATABASE_URL) {
//   console.error('DATABASE_URL environment variable not found!');
//   process.exit(1);
// }

// export const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   // Enable SSL with certificate verification for production
//   ssl: {
//     rejectUnauthorized: process.env.NODE_ENV === 'production', // Adjust based on your needs
//     ca:
//       process.env.NODE_ENV === 'production' &&
//       fs.existsSync('/path/to/server-certificates/root.crt')
//         ? fs.readFileSync('/path/to/server-certificates/root.crt').toString()
//         : undefined,
//   },
// });

// // Initialize a new pool of PostgreSQL connections using configuration from environment variables
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: parseInt(process.env.DB_PORT || '5432'),
// });

// type Ranking = {
//   rank: number;
//   fighterName: string;
// };

// // A function to insert rankings into the database
// export const insertRanking = async (
//   division: string,
//   rankings: Ranking[]
// ): Promise<void> => {
//   const client = await pool.connect();

//   try {
//     await client.query('BEGIN');
//     for (const ranking of rankings) {
//       await client.query(
//         'INSERT INTO fighter_rankings (division, rank, fighter_name) VALUES ($1, $2, $3) ON CONFLICT (rank, division) DO UPDATE SET fighter_name = EXCLUDED.fighter_name, updated_at = NOW()',
//         [division, ranking.rank, ranking.fighterName]
//       );
//     }
//     await client.query('COMMIT');
//   } catch (error) {
//     await client.query('ROLLBACK');
//     throw error;
//   } finally {
//     client.release();
//   }
// };
