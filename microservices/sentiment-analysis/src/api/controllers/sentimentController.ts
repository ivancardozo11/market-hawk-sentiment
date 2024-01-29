import { Request, Response } from 'express';

export const analyzeSentiment = (req: Request, res: Response): void => {

  res.status(200).send("Resultados del análisis de sentimientos");
};