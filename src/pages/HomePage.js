import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import MoviesList from "../components/movieList/MoviesList";
import fetchMovieData from "../services/fetchMovieData/fetchMovieData";
import { searchParamsTrendingMovies } from "../services/searchParams/searchParams";

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  const { pathname } = useLocation();

  useEffect(() => {
    try {
      fetchMovieData(searchParamsTrendingMovies()).then((res) =>
        setMovies(res.results)
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  return movies && <MoviesList movies={movies} goBack={pathname} />;
};

export default HomePage;
