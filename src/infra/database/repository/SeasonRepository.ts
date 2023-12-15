import Season from "src/domain/Season";
import TypeOrmBaseRepository from "./TypeOrmBaseRepository";
import ISeasonRepository from "./interfaces/ISeasonRepository";
import { inject, injectable } from "inversify";
import { TYPES } from "src/infra/DI/types";
import ITypeOrmConnection from "../config/ITypeOrmConnection";

@injectable()
export default class SeasonRepository
  extends TypeOrmBaseRepository<Season>
  implements ISeasonRepository
{
  constructor(connection: ITypeOrmConnection) {
    const dataSource = connection.getDataSource();
    super(dataSource.getRepository(Season), Season, dataSource);
  }
}
