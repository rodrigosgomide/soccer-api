import "reflect-metadata";
import express from "express";

import { Router, Request, Response } from "express";

const app = express();

const route = Router();

app.use(express.json());

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript2" });
});

app.use(route);

app.listen(3002, () => "server running on port 3002");
