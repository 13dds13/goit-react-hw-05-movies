import React, { useState } from "react";

const SearchForm = ({ addMovies }) => {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addMovies(query);
  };

  const onClick = () => {
    setQuery("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          <input value={query} type="text" onChange={onChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      <button type="button" onClick={onClick}>
        Clear request
      </button>
    </>
  );
};

export default SearchForm;
