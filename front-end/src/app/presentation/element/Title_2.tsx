import React from "react";

interface title_2_props {
  css: string;
  name: string;
}
const Title_2 = (props: title_2_props) => {
  const { name, css } = props;
  return <h1 className={`title-2 ${css}`}>{name}</h1>;
};

export { Title_2 };
