import { project_service } from "project/domain/service";
import { Create_Entity } from "project/domain/entity";
import { Http } from "project/infrastructure/http";
import { create_dto } from "project/domain/dto";
import { AxiosResponse } from "axios";
import {API_URL} from '@env'


class Project_Repository implements project_service {
  public http: Http = new Http();
  private static repository: Project_Repository;

  public create = async (
    project: Create_Entity
  ): Promise<AxiosResponse<create_dto, any>> => {
    return await this.http.post(
      `${API_URL}/project/create`,
      project,
      this.http.header()
    );
  };

  private constructor() {}
  public static get_repository(): Project_Repository {
    if (this.repository === undefined)
      this.repository = new Project_Repository();
    return this.repository;
  }
}
export { Project_Repository };
