import { QueryResult } from "pg";
import { Project_Service, create_dto } from "projects/domain/service";
import { Project_Entity } from "../domain/entity/project.entity";
class Project_Use_Case {
  constructor(private readonly project_service: Project_Service) {}

  create = async (
    project: Project_Entity
  ): Promise<QueryResult<create_dto>> => {
    return await this.project_service.create(project);
  };
}

export { Project_Use_Case };
