import ICreateSeason from "./aplication/ICreateSeason";
import Season from "./domain/Season";
import { Request, Response } from "express";

export default class SeasonController {
  constructor(private createSeason: ICreateSeason) {}

  async create(req: Request, res: Response): Promise<void> {
    const season = await this.createSeason.execute(new Season(req.body));
    res.json(season);
  }
}
