import React, { useState } from "react";

const SearchForm = ({ handleSubmit }) => {
  const [inputQuery, setInputQuery] = useState("");

  const onChange = (e) => {
    setInputQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(inputQuery);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          Your request:
          <input
            placeholder="type here..."
            value={inputQuery}
            type="text"
            onChange={onChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchForm;
