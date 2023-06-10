import {
  Title_2,
  Paragraph,
} from "@project/presentation/element";
import { List } from "./List";
interface project_props {
  url_image: string;
  title: string;
  paragraph: string;
  tecnologies: string[];
}
const Project = (props: project_props) => {
  const { title, url_image, paragraph, tecnologies } = props;
  return (
    <section className="project bg-col-black-200">
      <img src={url_image} alt="" />
      <div className="content">
        <Title_2 css={"text-color-white-200"} name={title} />
        <Paragraph css={"text-color-white-200"} name={paragraph} />
        <List items={tecnologies} item_focus={""} return_item={()=>null} />
      </div>
    </section>
  );
};

export { Project };
