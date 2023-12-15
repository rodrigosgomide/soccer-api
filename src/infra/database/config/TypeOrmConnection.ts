import { DataSource } from "typeorm";
import ITypeOrmConnection from "./ITypeOrmConnection";
import { injectable } from "inversify";

@injectable()
export default class TypeOrmConnection implements ITypeOrmConnection {
  private dataSource: DataSource;
  private connection: DataSource;
  constructor() {
    this.connection = new DataSource({
      type: "mysql",
      host: process.env.DB_HOST,
      port: process.env.DB_PORT as unknown as number,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false,
      logging: true,
      migrationsRun: false,
      entities: ["/src/domain/*.ts"],
      migrations: ["src/infra/database/migration/**/*.js"],
    });
  }

  async makeConnection(): Promise<void> {
    await this.connection.initialize().then((dataSource: DataSource) => {
      dataSource.isInitialized && console.log("connect to database");
      this.dataSource = dataSource;
    });
  }

  getDataSource(): DataSource {
    return this.dataSource;
  }
}
