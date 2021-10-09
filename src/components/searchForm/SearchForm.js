import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const match = useRouteMatch();
  const history = useHistory();

  console.log("form");

  useEffect(() => {
    const URLsearch = history.location.search;
    if (!URLsearch) return;
    const initQuery = URLsearch?.split("=")[1];
    initQuery && setQuery(initQuery);
  }, [history.location.search]);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`${match.url}?query=${query}`);
  };

  const onClick = () => {
    setQuery("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          Your request:
          <input
            placeholder="Type here..."
            value={query}
            type="text"
            onChange={onChange}
          />
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
