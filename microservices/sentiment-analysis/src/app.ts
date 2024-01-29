import express, { Express } from 'express';
import sentimentRoutes from './api/routes/sentimentRoutes';

const app: Express = express();

app.use(express.json());

app.use('/api/sentiment', sentimentRoutes);

export default app;