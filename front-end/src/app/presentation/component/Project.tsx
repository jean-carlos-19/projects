import { Title_2, Paragraph } from "@project/presentation/element";
import { Tecnologies } from "./Tecnologies";
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
      <img src={url_image} alt={"Imagen de portada"} />
      <div className="content">
        <Tecnologies items={tecnologies} />
        <Title_2 css={"text-color-white-200"} name={title} />
        <Paragraph css={"text-color-white-200"} name={paragraph} />
        <button className="bg-col-black-200  text-color-white-200" onClick={()=> console.log("mostrar")}>
          <Paragraph css={"text-color-white-200"} name={"Ver mas"} />
        </button>
      </div>
    </section>
  );
};

export { Project };
