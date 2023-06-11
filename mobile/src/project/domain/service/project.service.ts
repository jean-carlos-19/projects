import { AxiosResponse } from "axios"
import {create_dto} from 'project/domain/dto'
interface project_service {
    create():Promise<AxiosResponse<create_dto>>
}
export type {project_service}