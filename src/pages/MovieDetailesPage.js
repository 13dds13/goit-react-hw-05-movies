import React, { useEffect, useState } from "react";
import { useRouteMatch, useLocation } from "react-router-dom";
import GoBackBtn from "../components/goBackBtn/GoBackBtn";
import MovieDetails from "../components/movieDetails/MovieDetails";
import Navigation from "../components/navigation/Navigation";
import RoutesList from "../components/routesList/RoutesList";
import { routesForMovieDetailsPage } from "../routes/routesForMovieDetailsPage";
import fetchMovieData from "../services/fetchMovieData/fetchMovieData";
import { searchParamsWithId } from "../services/searchParams/searchParams";

const { additionalMovieInfo } = routesForMovieDetailsPage;

const MovieDetailesPage = () => {
  const [idForRequest, setId] = useState("");
  const [movie, setMovie] = useState(null);
  const { params, url } = useRouteMatch();
  const { movieId } = params;
  const {
    state: { from },
  } = useLocation();

  useEffect(() => {
    setId(movieId);
  }, [movieId]);

  useEffect(() => {
    if (!idForRequest) return;

    fetchMovieData(searchParamsWithId(idForRequest))
      .then((res) => setMovie(res))
      .catch((error) => console.log(error));
  }, [idForRequest, movieId]);

  return (
    <>
      <GoBackBtn goTo={from} />
      {movie && <MovieDetails movie={movie} />}
      <Navigation routes={additionalMovieInfo} match={url} goBack={from} />
      <RoutesList routes={additionalMovieInfo} match={url} />
    </>
  );
};

export default MovieDetailesPage;
