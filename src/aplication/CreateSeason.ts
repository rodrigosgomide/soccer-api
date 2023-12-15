import { injectable } from "inversify";
import Season from "src/domain/Season";
import ISeasonRepository from "src/infra/database/repository/interfaces/ISeasonRepository";
import ICreateSeason from "./ICreateSeason";

@injectable()
export default class CreateSeason implements ICreateSeason {
  constructor(private seasonRepository: ISeasonRepository) {}
  async execute(season: Season): Promise<Season> {
    return await this.seasonRepository.create(season);
  }
}
