// .api/getData.ts
import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    const { user } = req.query;
    const rows = await sql`SELECT * FROM carts WHERE user_id=${user}`;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data' });
  }
}
