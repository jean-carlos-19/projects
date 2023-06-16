import { useState } from "react";

const useProgressBar = (lenght: number) => {
  const [items] = useState(new Array(lenght).fill(1));
  const [position, set_position] = useState(1);

  const position_location = (posicion: number): void => {
    set_position(posicion);
  };
  return { items, position, position_location };
};
export { useProgressBar };
