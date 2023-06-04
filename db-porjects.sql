-- drop type categories;
create type software_categories as enum ('Web','Mobile','Server','Sql');
-- drop table projects;
create table projects(
	id_project serial primary key,
  title varchar(50) not null,
  description text not null,
  conclusion text not null,
  catgeory software_categories not null,
  url_image text not null,
  url_demo text not null,
  url_github text not null,
  active boolean default false
)


create function create_project(
	project_title varchar(50),
  project_description text,
  project_conclusion text,
  project_category software_categories,
  project_url_image text,
  project_url_demo text,
  project_url_github text
) 
returns table (codigo integer, mensaje text)
language 'plpgsql'	
as $$
begin 

	insert into projects(
  	title,
    description,
    conclusion,
    category,
    url_image,
    url_demo,
    url_github
  ) values (
    project_title, 
    project_description,
    project_conclusion, 
    project_category, 
    project_url_image,
    project_url_demo,
    project_url_github
  );
  
  return query(
  	select 
    200,
    'Se ha guardado correctamente el projecto: '||project_title
  );
end 
$$;

create function search_project(project_category software_categories)
returns table (
  title varchar(50),
  description text,
  conclusion text,
  url_image text,
  url_demo text,
  url_github text
)
language 'plpgsql'	
as $$

begin 

return query(
	select 
  	list_projects.title,
    list_projects.description,
    list_projects.conclusion,
    list_projects.url_image,
    list_projects.url_demo,
    list_projects.url_github
  from list_projects
  where list_projects.category = project_category
);
end
$$;



create view list_projects as

select 
	projects.title,
  projects.description,
  projects.conclusion,
  projects.url_image,
  projects.url_demo,
  projects.url_github,
  projects.category
from projects
where not projects.active;










