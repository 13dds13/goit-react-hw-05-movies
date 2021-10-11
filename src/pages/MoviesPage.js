import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch, useLocation } from "react-router-dom";
import MoviesList from "../components/movieList/MoviesList";
import Notification from "../components/notification/Notification";
import SearchForm from "../components/searchForm/SearchForm";
import fetchMovieData from "../services/fetchMovieData/fetchMovieData";
import { searchParamsWithKeyword } from "../services/searchParams/searchParams";
import { emptyInput, fatalError, invalidRequest } from "../data/messages.json";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const { search, pathname } = useLocation();
  const history = useHistory();
  const { url } = useRouteMatch();

  useEffect(() => {
    const initQuery = search.split("=")[1];
    setQuery(initQuery);
  }, [search]);

  useEffect(() => {
    if (!query) return;

    const dataForFetch = searchParamsWithKeyword(query);

    fetchMovieData(dataForFetch)
      .then(({ results }) => setSearchResult(results))
      .catch(() => setErrorMsg(fatalError))
      .finally(() => setErrorMsg(""));
  }, [query]);

  useEffect(() => {
    if (!searchResult) {
      setErrorMsg(emptyInput);
      return;
    }
    if (searchResult) {
      !searchResult.length && setErrorMsg(invalidRequest);
    }
  }, [searchResult]);

  const handleSubmit = (inputQuery) => {
    if (!inputQuery) {
      setErrorMsg(emptyInput);
      return;
    }
    setQuery(inputQuery);
    history.push(`${url}?query=${inputQuery}`);
  };

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      <Notification msg={errorMsg} />
      {!errorMsg && searchResult && (
        <MoviesList movies={searchResult} goBack={pathname + search} />
      )}
    </>
  );
};

export default MoviesPage;
