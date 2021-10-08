import React, { useState } from "react";
import MoviesList from "../components/movieList/MoviesList";
import Notification from "../components/notification/Notification";
import SearchForm from "../components/searchForm/SearchForm";
import fetchMovieData from "../services/fetchMovieData/fetchMovieData";
import searchParams from "../services/searchParams/searchParams";

const SEARCH_TYPE = "searchByKeyword";

const MoviesPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const addMovies = async (query) => {
    if (!query) {
      setErrorMsg("Enter something ;)");
      searchResult.length && setSearchResult([]);
      return;
    }
    try {
      errorMsg && setErrorMsg("");
      const dataForFetch = searchParams(SEARCH_TYPE, query);
      const { results } = await fetchMovieData(dataForFetch);
      if (!results.length) {
        setErrorMsg("Invalid request. Try something else.");
        searchResult.length && setSearchResult([]);
        return;
      }
      setSearchResult(results);
    } catch (error) {
      setErrorMsg("Ooops, something went wrong!");
    }
  };

  return (
    <>
      <SearchForm addMovies={addMovies} />
      <Notification errorMsg={errorMsg} />
      {!!searchResult.length && <MoviesList movies={searchResult} />}
    </>
  );
};

export default MoviesPage;
