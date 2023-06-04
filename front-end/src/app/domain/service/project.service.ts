import { AxiosResponse } from "axios";
import { List_Entity } from "@project/domain/entity";
interface Project_Service {
  list(): Promise<AxiosResponse<List_Entity>>;
}

export type { Project_Service };
