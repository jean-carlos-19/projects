import React from "react";

interface paragraph_props {
  css: string;
  name: string;
}
const Paragraph = (props: paragraph_props) => {
  const { name, css } = props;
  return <p className={`paragraph ${css}`}>{name}</p>;
};

export { Paragraph };
