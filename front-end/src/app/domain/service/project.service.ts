import { AxiosResponse } from "axios";
import { List_Entity } from "@project/domain/entity";
import { search_dto } from "../dto";
interface Project_Service {
  search(name_category: string): Promise<AxiosResponse<search_dto>>;
}

export type { Project_Service };
