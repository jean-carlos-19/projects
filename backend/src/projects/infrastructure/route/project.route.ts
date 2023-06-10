import { Router } from "express";
import { Project_Use_Case } from "projects/application";
import { Postgresql_Repository } from "projects/infrastructure/repository";
import { Project_Controller } from "../controller";
const ROUTE_PROJECT = Router();

// Iniciamos los repositorios de postgresql
const repository: Postgresql_Repository =
  Postgresql_Repository.get_postgresql_repository();

// Inicamos los casos de uso
const use_case: Project_Use_Case = new Project_Use_Case(repository);

//Iniciamos los controladores http
const conntroller: Project_Controller = new Project_Controller(use_case);

//Rutas

ROUTE_PROJECT.post("/create", conntroller.crear);
ROUTE_PROJECT.get("/search", conntroller.search);

export { ROUTE_PROJECT };