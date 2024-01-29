import { Request, Response } from 'express';

export const collectData = (req: Request, res: Response): void => {
  res.status(200).send("Datos recolectados");
};