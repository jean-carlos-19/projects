import { Postgresql } from "global/database";
import { Client, QueryResult } from "pg";
import { Project_Entity } from "projects/domain/entity";
import { Project_Service, create_dto } from "projects/domain/service";

class Postgresql_Repository implements Project_Service {
  private static postgresql_repository: Postgresql_Repository;
  private client!: Client;
  private constructor() {
    this.client = Postgresql.get_postgresql().query();
  }
  public static get_postgresql_repository(): Postgresql_Repository {
    if (this.postgresql_repository === undefined)
      this.postgresql_repository = new Postgresql_Repository();
    return this.postgresql_repository;
  }
  async create(project: Project_Entity): Promise<QueryResult<create_dto>> {
    const {
      title,
      description,
      conclusion,
      category,
      url_demo,
      url_github,
      url_image,
    } = project;
    console.log(project)
    return await this.client.query(`
        select * from create_project(
            '${title}',
            '${description}',
            '${conclusion}',
            '${category}',
            '${url_demo}',
            '${url_github}',
            '${url_image}'
        );
    `);
  }
}
export { Postgresql_Repository };
