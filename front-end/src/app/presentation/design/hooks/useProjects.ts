import { useState,useEffect,useCallback } from "react";
import { NAMES_PROJECTS } from "@global/names/projects";
import {Project_Repository} from '@project/infrastructure/repository';
import { AxiosResponse } from "axios";
import { search_dto } from "@project/domain/dto";
const respository:Project_Repository = Project_Repository.get_project_repository();


const useProjects = (
  set_loading:(state:boolean)=>void
) => {
  const name_projects: string[] = [
    NAMES_PROJECTS.WEB,
    NAMES_PROJECTS.MOBILE,
    NAMES_PROJECTS.SERVER,
    NAMES_PROJECTS.SQL,
  ];

  const [projects,set_projects]:any = useState([])
  const [name, set_name] = useState(NAMES_PROJECTS.WEB);


  useEffect(()=>{
    get_all_projects(name);
  },[name]);
  
  const get_all_projects = useCallback(async (name_category:string)=>{
    set_loading(true);
    try {
      const result:AxiosResponse<search_dto> = await respository.search(name_category);
      set_projects(result.data.data)
    } catch (error) {
      console.error(error);
    }
    set_loading(false);
  },[])

  const get_location = (name_secction: any): void => {
    set_name(name_secction);
  };

  return { name, name_projects,projects, get_location };
};
export { useProjects };
