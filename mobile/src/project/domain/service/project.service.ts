import { AxiosResponse } from "axios"
import {create_dto} from 'project/domain/dto'
import {Create_Entity} from 'project/domain/entity'
interface project_service {
    create(project:Create_Entity):Promise<AxiosResponse<create_dto>>
}
export type {project_service}