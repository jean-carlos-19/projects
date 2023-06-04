import React from "react";

interface list_props {
  items: string[];
  item_focus: string;
  return_item: (item: string) => void;
}
const List = (props: list_props) => {
  const { items, item_focus, return_item } = props;
  return (
    <ul>
      {items.map((item: string, i: number) =>
        item_focus === item ? (
          <li key={i}>
            <button
              className="title-2 text-color-white-200 title__focus"
              onClick={() => return_item(item)}
            >
              {item}
            </button>
          </li>
        ) : (
          <li key={i}>
            <button
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
