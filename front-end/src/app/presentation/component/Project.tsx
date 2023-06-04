import {
  Title_2,
  Paragraph,
  Small_Paragraph,
} from "@project/presentation/element";
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
        <ul>
          {tecnologies.map((tecnology: string) => (
            <li className="bg-col-white-100">
              <Small_Paragraph css={""} name={tecnology} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Project };
