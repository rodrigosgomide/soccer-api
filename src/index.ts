import "reflect-metadata";
import express from "express";
require("dotenv").config();

import { Router, Request, Response } from "express";
import Connection from "./infra/database/config/TypeOrmConnection";
import CreateSeason from "./aplication/CreateSeason";

const app = express();

const route = Router();

app.use(express.json());

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript2" });
});

route.post("/season");

app.use(route);

app.listen(3002, () => "server running on port 3002");

const connection = new Connection();
connection.makeConnection();
