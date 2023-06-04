import { useState } from "react";
import { NAMES_PROJECTS } from "@global/names/projects";
const useProjects = () => {
  const name_projects: string[] = [
    NAMES_PROJECTS.WEB,
    NAMES_PROJECTS.MOBILE,
    NAMES_PROJECTS.SERVER,
    NAMES_PROJECTS.SQL,
  ];
  const [name, set_name] = useState(NAMES_PROJECTS.WEB);
  const get_location = (name_secction: any): void => {
    set_name(name_secction);
  };
  return { name, name_projects, get_location };
};
export { useProjects };
