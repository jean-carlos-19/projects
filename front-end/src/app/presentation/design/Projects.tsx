"use client"; // This is a client component 👈🏽
import { NAMES_PROJECTS } from "@global/names/projects";
import { List, Loading, Project, Not_Found } from "@project/presentation/component";
import { useLoading } from "@global/states";
import { useProjects } from "./hooks";
import { List_Entity } from "@project/domain/entity";

const Projects = () => {
  const { loading, set_loading } = useLoading();
  const { name, projects, name_projects, get_location } =
    useProjects(set_loading);
  return (
    <div className="projects">
      <List
        items={name_projects}
        return_item={get_location}
        item_focus={name}
      />
      <Not_Found data={projects} loading={loading} />
      <Loading state={loading} />
      <div className="body">
        {name === NAMES_PROJECTS.WEB
          ? projects.map((project: List_Entity, i: number) => (
              <Project
                key={i}
                url_image={project.url_image}
                title={project.title}
                paragraph={project.description}
                tecnologies={project.tecnologies.split(",")}
              />
            ))
          : name === NAMES_PROJECTS.MOBILE
          ? projects.map((project: List_Entity, i: number) => (
              <Project
                key={i}
                url_image={project.url_image}
                title={project.title}
                paragraph={project.description}
                tecnologies={project.tecnologies.split(",")}
              />
            ))
          : name === NAMES_PROJECTS.SERVER
          ? projects.map((project: List_Entity, i: number) => (
              <Project
                key={i}
                url_image={project.url_image}
                title={project.title}
                paragraph={project.description}
                tecnologies={project.tecnologies.split(",")}
              />
            ))
          : projects.map((project: List_Entity, i: number) => (
              <Project
                key={i}
                url_image={project.url_image}
                title={project.title}
                paragraph={project.description}
                tecnologies={project.tecnologies.split(",")}
              />
            ))}
      </div>
    </div>
  );
};

export { Projects };
