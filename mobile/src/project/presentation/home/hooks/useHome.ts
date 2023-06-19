import { useCallback, useState } from "react";
import { Create_Entity } from "project/domain/entity";
import { Project_Repository } from "project/infrastructure/repository";
import { AxiosResponse } from "axios";
import { create_dto } from "project/domain/dto";

const repository: Project_Repository = Project_Repository.get_repository();
const values_project: Create_Entity = {
  title: "",
  description: "",
  conclusion: "",
  category: "",
  tecnologies: "",
  url_demo: "",
  url_github: "",
  url_image: "",
};

const useHome = (
  set_loading: (state: boolean) => void,
  set_error: (sms: string) => void,
  set_message: (sms: string) => void
) => {
  const [initialValues] = useState(values_project);

  const create_project = useCallback(async (datos: Create_Entity) => {
    set_loading(true);
    try {
      const respuesta: AxiosResponse<create_dto, any> = await repository.create(
        datos
      );
      const { id_response, message_response } = respuesta.data;
      set_message(message_response)
    } catch (error) {
      set_error('Error en el servidor al crear el proyecto')
    }
    set_loading(false);
  }, []);

  return { initialValues, create_project };
};

export { useHome };
