import React from "react";
import List from "./List";
import Search from "./Search";
import "./App.css";

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

function App() {
  return (
    <div className="App">
      <h1>My Hacker Stories</h1>

      <Search />
      <hr />
      <List />
    </div>
  );
}

export default App;
