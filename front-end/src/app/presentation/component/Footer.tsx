import React from "react";
import { Title_2, Paragraph } from "@project/presentation/element";

const Footer = () => {
  return (
    <footer className="footer bg-col-black-200">
      <section className="social-media">
        <header>
          <Title_2 css={"text-color-white-200 "} name={"Social Medila"} />
        </header>
        <ul className="list">
          <li>
            <Paragraph css={"text-color-white-200"} name={"Instgram"} />
          </li>
          <li>
            <Paragraph css={"text-color-white-200"} name={"Linkedin"} />
          </li>
          <li>
            <Paragraph css={"text-color-white-200"} name={"Githubº"} />
          </li>
        </ul>
      </section>
      <div className="owner">
        <Title_2 css={"text-color-white-200"} name={"{};"} />
        <Title_2 css={"text-color-white-200"} name={"PiguaveSoft"} />
      </div>
    </footer>
  );
};

export { Footer };
