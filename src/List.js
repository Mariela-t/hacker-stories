import React from "react";
import Item from "./Item";

export default function List(props) {
  return (
    <ul>
      {props.list.map((item) => (
        <Item key={item.obectID} item={item} />
      ))}
    </ul>
  );
}
