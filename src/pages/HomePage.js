import React, { useState, useEffect } from "react";
import MoviesList from "../components/movieList/MoviesList";
import fetchMovieData from "../services/fetchMovieData/fetchMovieData";
import { searchParamsTrendingMovies } from "../services/searchParams/searchParams";

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    try {
      fetchMovieData(searchParamsTrendingMovies()).then((res) =>
        setMovies(res.results)
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  return movies && <MoviesList movies={movies} />;
};

export default HomePage;
