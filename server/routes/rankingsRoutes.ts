import { Router } from 'express';
import {
  getRankings,
  addRankings,
  updateRankings,
} from '../scripts/controllers/rankingController';
const router = Router();

router.get('/rankings', getRankings);
router.post('/rankings', addRankings);
router.put('/rankings/:id', updateRankings);

export default router;
