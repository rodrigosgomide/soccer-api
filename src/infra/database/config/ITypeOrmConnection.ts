import { DataSource } from "typeorm";

export default interface ITypeOrmConnection {
  makeConnection: () => Promise<void>;
  getDataSource: () => DataSource;
}
