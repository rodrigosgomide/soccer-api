import { Request, Response } from "express";

export default interface ISeasonRepository {
  create: (req: Request, res: Response) => Promise<void>;
}
