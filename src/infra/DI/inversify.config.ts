import { Container } from "inversify";
import { TYPES } from "./types";
import ITypeOrmConnection from "../database/config/ITypeOrmConnection";
import SeasonRepository from "../database/repository/SeasonRepository";
import ISeasonRepository from "../database/repository/interfaces/ISeasonRepository";

const myContainer = new Container();
myContainer.bind<ITypeOrmConnection>(TYPES.ITypeOrmConnection).toSelf();
myContainer.bind<ISeasonRepository>(TYPES.ISeasonRepository).toSelf();

export { myContainer };
