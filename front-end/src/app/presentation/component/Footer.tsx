import React from "react";
import { Title_2 } from "@project/presentation/element";
import { Social_Media } from '@project/presentation/component'
const Footer = () => {
  return (
    <footer className="footer bg-col-black-200">
      <section className="social-media">
        <header>
          <Title_2 css={"text-color-white-200 "} name={"Social Medila"} />
        </header>
        <Social_Media />
      </section>
      <div className="owner">
        <Title_2 css={"text-color-white-200"} name={"{};"} />
        <Title_2 css={"text-color-white-200"} name={"PiguaveSoft"} />
      </div>
    </footer>
  );
};

export { Footer };
