// // /server/controllers/rankingController.ts

// import { Request, Response } from 'express';
// import { insertRankings } from '../insertRanks';
// import { Pool } from 'pg';

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: parseInt(process.env.DB_PORT || '5432'),
// });

// // Get rankings from the database
// export const getRankings = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const { rows } = await pool.query('SELECT * FROM fighter_rankings');
//     res.status(200).json(rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to retrieve rankings' });
//   }
// };

// // Add a new ranking to the database
// export const addRankings = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { division, rankings } = req.body;
//   try {
//     await insertRankings(division, rankings);
//     res.status(201).json({ message: 'Rankings added successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to add rankings' });
//   }
// };

// export const updateRankings = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const { id } = req.params; // Assuming the ranking ID is passed in the URL
//     const { fighterName } = req.body;

//     await pool.query(
//       'UPDATE fighter_rankings SET fighter_name = $1 WHERE id = $2',
//       [fighterName, id]
//     );
//     res.status(200).json({ message: 'Ranking updated successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to update ranking' });
//   }
// };
