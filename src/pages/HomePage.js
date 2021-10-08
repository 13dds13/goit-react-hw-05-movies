import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import fetchMovieData from "../services/fetchMovieData/fetchMovieData";
import searchParams from "../services/searchParams/searchParams";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      fetchMovieData(searchParams()).then((res) => setMovies(res.results));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ul>
      {movies.map(({ title }, ind) => (
        <li key={ind}>{title}</li>
      ))}
    </ul>
  );
};

export default HomePage;
