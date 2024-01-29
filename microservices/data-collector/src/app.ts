import express, { Express } from 'express';
import dataCollectorRoutes from './api/routes/dataCollectorRoutes';

const app: Express = express();

app.use(express.json());

app.use('/api/data-collector', dataCollectorRoutes);

export default app;