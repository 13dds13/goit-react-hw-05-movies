import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MoviesList from "../components/movieList/MoviesList";
import Notification from "../components/notification/Notification";
import SearchForm from "../components/searchForm/SearchForm";
import fetchMovieData from "../services/fetchMovieData/fetchMovieData";
import { searchParamsWithKeyword } from "../services/searchParams/searchParams";

const MoviesPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [query, setQuery] = useState("");
  const { location } = useHistory();

  console.log("movie page");

  useEffect(() => {
    const URLsearch = location.search;
    if (!URLsearch) return;
    const query = URLsearch?.split("=")[1];
    setQuery(query);

    if (!query) {
      setErrorMsg("Enter something ;)");
      searchResult.length && setSearchResult([]);
      return;
    }
    try {
      errorMsg && setErrorMsg("");
      const dataForFetch = searchParamsWithKeyword(query);
      fetchMovieData(dataForFetch).then(({ results }) => {
        if (!results.length) {
          setErrorMsg("Invalid request. Try something else.");
          searchResult.length && setSearchResult([]);
          return;
        }
        setSearchResult(results);
      });
    } catch (error) {
      setErrorMsg("Ooops, something went wrong!");
    }
  }, [location.search, searchResult.length, errorMsg]);

  return (
    <>
      <SearchForm queryURL={query} />
      <Notification errorMsg={errorMsg} />
      {!!searchResult.length && <MoviesList movies={searchResult} />}
    </>
  );
};

export default MoviesPage;
