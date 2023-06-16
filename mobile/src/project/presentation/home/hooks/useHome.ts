import { useCallback, useState } from "react";
import { Create_Entity } from "project/domain/entity";
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
  set_loading:(state:boolean)=>void,
  set_error:(sms:string)=>void,
  set_message:(sms:string)=>void,
) => {
  const [initialValues] = useState(values_project);
  const create_project = useCallback((datos: Create_Entity) => {
    console.log(datos);
  }, []);

  return { initialValues, create_project };
};

export { useHome };
