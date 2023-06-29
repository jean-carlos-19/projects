import React from "react";
import {Paragraph} from '@project/presentation/element'

interface list_props {
  items: string[];
  item_focus: string;
  return_item: (item: string) => void;
}
const List = (props: list_props) => {
  const { items, item_focus, return_item } = props;
  return (
    <ul className="list">
      {items.map((item: string, i: number) =>
        item_focus === item ? (
          <li className="item" key={i}>
            <button
              title={`Apps ${item}`}
              className="title-2 text-color-white-200 title__focus"
              onClick={() => return_item(item)}
            >
              {item}
            </button>
          </li>
        ) : (
          <li className="item" key={i}>
            <button
              title={`Apps ${item}`}
              className="title-2 text-color-white-200"
              onClick={() => return_item(item)}
            >
              {item}
            </button>
          </li>
        )
      )}
    </ul>
  );
};

export { List };
