import * as dotenv from "dotenv";
dotenv.config();

import { Postgresql } from "global/database";
import express, { Request, Response } from "express";
import morgan from "morgan";
import http from "http";
import { ROUTE_PROJECT } from "projects/infrastructure/route";

const APP = express();
const PORT: number = 3000;

APP.set("port", PORT);

APP.use(express.urlencoded({ extended: true }));
APP.use(express.json());
APP.use(morgan("dev"));

APP.use("/project", ROUTE_PROJECT);
APP.use("*", (request: Request, response: Response) => {
  response.json({
    id_response: 404,
    message_response: "Page not found :C",
  });
});

const SERVER = http.createServer(APP);

const main = async () => {
  const pg: Postgresql = Postgresql.get_postgresql();
  try {
    await pg.connect();
    await SERVER.listen(APP.get("port"));
    console.log(`runing server on port ${APP.get("port")}`);
  } catch (error) {
    console.error("Error en el servidor :C ", error);
  }
};
main();
