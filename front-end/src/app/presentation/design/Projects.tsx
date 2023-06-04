"use client"; // This is a client component 👈🏽
import { NAMES_PROJECTS } from "@global/names/projects";
import { List, Loading, Project } from "@project/presentation/component";
import { useLoading } from "@global/states";
import { useProjects } from "./hooks";
const Projects = () => {
  const { loading, set_loading } = useLoading();
  const { name, name_projects, get_location } = useProjects();
  return (
    <div className="projects">
      <List
        items={name_projects}
        return_item={get_location}
        item_focus={name}
      />
      {loading ? (
        <Loading />
      ) : (
        <div className="body">
          {name === NAMES_PROJECTS.WEB ? (
            <Project
              url_image={
                "https://images.unsplash.com/photo-1682687218904-de46ed992b58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=943&q=80"
              }
              title={"my title"}
              paragraph={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem saepe facere dolorum suscipit, odio aspernatur deserunt eveniet dolore eius iusto tempora corrupti veniam! Facilis quidem voluptatum autem quis ad voluptatem quibusdam consequuntur possimus perferendis impedit obcaecati delectus rerum quam officia pariatur, incidunt qui natus eveniet sit ipsa velit exercitationem."
              }
              tecnologies={["Typescript", "Expo"]}
            />
          ) : name === NAMES_PROJECTS.MOBILE ? null : name ===
            NAMES_PROJECTS.SERVER ? null : null}
        </div>
      )}
    </div>
  );
};

export { Projects };
