import React from "react";
import List from "./List";
import Search from "./Search";
import "./App.css";

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      obectID: 0,
    },
    {
      title: "Redux",
      url: "https//redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      obectID: 1,
    },
  ];

  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} />
      <hr />
      <List list={stories} />
    </div>
  );
};

export default App;
