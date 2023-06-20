import { search_dto } from "@project/domain/dto";
import { List_Entity } from "@project/domain/entity";
import { Project_Service } from "@project/domain/service";
import { Http } from "@project/infrastructure/http";
import { AxiosResponse } from "axios";

class Project_Repository implements Project_Service {
  private static project_repository: Project_Repository;
  private http: Http = new Http();

  public static get_project_repository(): Project_Repository {
    if (this.project_repository === undefined)
      this.project_repository = new Project_Repository();
    return this.project_repository;
  }
  public async search(name_category:string): Promise<AxiosResponse<search_dto>> {
    return await this.http.get<search_dto>(
      `${process.env.REACT_URL_API_REMOTE}/project/search?category=${name_category}`,
      this.http.header_get()
    );
  }
  private constructor() {}
}
export { Project_Repository };
