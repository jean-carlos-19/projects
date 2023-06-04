import React from "react";

interface small_paragraph_props {
  css: string;
  name: string;
}
const Small_Paragraph = (props: small_paragraph_props) => {
  const { name, css } = props;
  return <p className={`small-paragraph ${css}`}>{name}</p>;
};

export { Small_Paragraph };
