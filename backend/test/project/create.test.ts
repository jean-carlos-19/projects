import { Postgresql } from "global/database";
import { QueryResult } from "pg";
import { Project_Use_Case } from "projects/application";
import { create_dto } from "projects/domain/service";
import { Postgresql_Repository } from "projects/infrastructure/repository";
test("create an project ", async () => {
  const pg: Postgresql = Postgresql.get_postgresql();
  await pg.connect();

  // Iniciamos los repositorios de postgresql
  const repository: Postgresql_Repository =
    Postgresql_Repository.get_postgresql_repository();

  // Inicamos los casos de uso
  const use_case: Project_Use_Case = new Project_Use_Case(repository);

  const result: QueryResult<create_dto> = await use_case.create({
    title: "example",
    category: "Web",
    conclusion: "dfkldskdlsj",
    description: "dkfdsfdkld",
    tecnologies: "ts,expo,js",
    url_demo: "dsfds",
    url_github: "dsfsdfs",
    url_image: "dsfdfdd",
  });
  console.log(result.rows);

  expect(true).toBe(true);
});
