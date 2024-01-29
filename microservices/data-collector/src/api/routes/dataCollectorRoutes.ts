import { Router } from 'express';
import { collectData } from '../controllers/dataCollectorController';

const router = Router();

router.post('/collect', collectData);

export default router;