import { Project_Entity } from "projects/domain/entity";
import { create_dto } from "./dto/project";
import { QueryResult } from "pg";
interface Project_Service {
  create(project: Project_Entity): Promise<QueryResult<create_dto>>;
}
export { Project_Service };
