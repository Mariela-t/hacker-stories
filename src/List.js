import React from "react";

const list = [
  {
    title: "React",
    url: "https://reactjs.org",
    obectID: 0,
  },
  {
    title: "Redux",
    url: "https//redux.js.org/",
    obectID: 1,
  },
];

export default function List() {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.obectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
        </li>
      ))}
    </ul>
  );
}
