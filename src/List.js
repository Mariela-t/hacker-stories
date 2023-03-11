import React from "react";
import Item from "./Item";

const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.obectID} item={item} onRemoveItem={onRemoveItem} />
    ))}
  </ul>
);

export default List;
