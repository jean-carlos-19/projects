import React from 'react'

interface tecnologies_props {
  items: string[];
}

const Tecnologies = (props: tecnologies_props) => {
  const { items } = props;
  return (
    <ul className="tecnologies">
      {items.map((item: string, i: number) =>(
        <li className="item small-paragraph bg-col-white-200 text-color-black-100" key={i}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export { Tecnologies }
