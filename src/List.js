import React from "react";
import Item from "./Item";

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.obectID} item={item} />
    ))}
  </ul>
);

export default List;
