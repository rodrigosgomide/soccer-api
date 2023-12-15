import { DataSource } from "typeorm";

export const dataSource = new DataSource({
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

export async function makeConnection() {
  const connection = await dataSource
    .initialize()
    .then((dataSource: DataSource) => dataSource);

  return connection;
}
