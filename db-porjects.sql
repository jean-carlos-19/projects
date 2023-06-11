-- drop type categories;
create type software_categories as enum ('Web','Mobile','Server','Sql');
-- drop table projects;
CREATE TABLE
  public.projects (
    id_project serial NOT NULL,
    title character varying (50) NOT NULL,
    description text NOT NULL,
    conclusion text NOT NULL,
    url_image text NOT NULL,
    url_demo text NOT NULL,
    url_github text NOT NULL,
    active boolean NULL DEFAULT false,
    category software_categories NOT NULL,
    tecnologies text NULL
  );


CREATE OR REPLACE FUNCTION public.create_project(project_title character varying, project_description text, project_conclusion text, project_category software_categories, project_tecnologies text, project_url_image text, project_url_demo text, project_url_github text)
 RETURNS TABLE(id_response integer, message_response text)
 LANGUAGE plpgsql
AS $function$
begin 

	insert into projects(
  	title,
    description,
    conclusion,
    category,
	tecnologies,
    url_image,
    url_demo,
    url_github
  ) values (
    project_title, 
    project_description,
    project_conclusion, 
    project_category, 
	project_tecnologies,
    project_url_image,
    project_url_demo,
    project_url_github
  );
  
  return query(
  	select 
    200,
    'Se ha guardado correctamente el proyecto: '||project_title
  );
end 
$function$

CREATE OR REPLACE FUNCTION public.search_project(project_category software_categories)
 RETURNS TABLE(title character varying, description text, conclusion text, url_image text, url_demo text, url_github text, tecnologies text)
 LANGUAGE plpgsql
AS $function$

begin 

return query(
	select 
  	list_projects.title,
    list_projects.description,
    list_projects.conclusion,
    list_projects.url_image,
    list_projects.url_demo,
    list_projects.url_github, 
	 list_projects.tecnologies 
  from list_projects
  where list_projects.category = project_category
);
end
$function$



CREATE OR REPLACE VIEW
  "public".list_projects AS
SELECT
  projects.title,
  projects.description,
  projects.conclusion,
  projects.url_image,
  projects.url_demo,
  projects.url_github,
  projects.category,
  projects.tecnologies
FROM
  projects
WHERE
  NOT projects.active;









