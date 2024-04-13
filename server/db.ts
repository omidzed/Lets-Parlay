// import { Pool } from 'pg';

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
