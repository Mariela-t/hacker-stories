import React from "react";

export default function Search(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    props.onSearch(event);
  };
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>Searching for {searchTerm}</p>
    </div>
  );
}
