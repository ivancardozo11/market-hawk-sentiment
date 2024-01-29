import { Router } from 'express';
import { analyzeSentiment } from '../controllers/sentimentController';

const router = Router();

router.post('/analyze', analyzeSentiment);

export default router;