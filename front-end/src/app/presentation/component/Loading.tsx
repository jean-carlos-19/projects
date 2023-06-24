import React from "react";

interface loading_props {
  state: boolean;
}
function Loading(props: loading_props) {
  const { state } = props;
  return state ? <span className="loader"></span> : null;
}

export { Loading };
