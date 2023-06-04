import { List_Entity } from "@project/domain/entity";
import { Project_Service } from "@project/domain/service";
import { AxiosResponse } from "axios";
import { Http } from "@project/infrastructure/http";

class Project_Repository implements Project_Service {
  private static project_repository: Project_Repository;
  private http: Http = new Http();

  public static get_project_repository(): Project_Repository {
    if (this.project_repository === undefined)
      this.project_repository = new Project_Repository();
    return this.project_repository;
  }
  public async list(): Promise<AxiosResponse<List_Entity>> {
    return await this.http.get<List_Entity>(
      `${process.env.REACT_URL_API}/project/list`,
      this.http.header_get()
    );
  }
  private constructor() {}
}
export { Project_Repository };
