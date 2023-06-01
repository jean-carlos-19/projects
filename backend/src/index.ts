import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import http from "http";
import { Postgresql } from "global/database";

const APP = express();
const PORT: number = 3000;

APP.set("port", PORT);

APP.use(express.urlencoded({ extended: true }));
APP.use(express.json());
APP.use(morgan("dev"));

const SERVER = http.createServer(APP);

const main = async () => {
  const pg: Postgresql = Postgresql.get_postgresql();
  try {
    await pg.connect();
    await SERVER.listen(APP.get("port"));
    console.log(`runing server on port ${APP.get("port")}`);
  } catch (error) {
    console.error('Error en el servidor :C ',error)
  }
};
main();
