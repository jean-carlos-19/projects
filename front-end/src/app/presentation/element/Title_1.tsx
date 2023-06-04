import React from "react";

interface title_1_props {
  css: string;
  name: string;
}
const Title_1 = (props: title_1_props) => {
  const { name, css } = props;
  return <h1 className={`title-1 ${css}`}>{name}</h1>;
};

export { Title_1 };
