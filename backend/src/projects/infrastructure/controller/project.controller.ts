import { Request, Response } from "express";
import { QueryResult } from "pg";
import { Project_Use_Case } from "projects/application";
import { Project_Entity } from "projects/domain/entity";
import { create_dto } from "projects/domain/service";
import {Http} from 'global/http'

class Project_Controller extends Http{
  public constructor(private project_use_case: Project_Use_Case) {
    super();
  }

  crear = async (request: Request<{}, {}, Project_Entity>, response: Response) => {
    try {
      const project: Project_Entity = request.body;

      const result: QueryResult<create_dto> =
        await this.project_use_case.create(project);
      const { id_response, message_response } = result.rows[0];
      this.response(response,id_response,message_response);
    } catch (error) {
      console.error("server failed", error);
      this.response_server_failed(response);
    }
  };
}

export { Project_Controller };
