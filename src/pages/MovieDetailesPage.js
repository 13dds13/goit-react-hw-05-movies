import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
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
  const match = useRouteMatch();
  const { movieId } = match.params;

  useEffect(() => {
    setId(movieId);
  }, [movieId]);

  useEffect(() => {
    if (!idForRequest) return;

    fetchMovieData(searchParamsWithId(idForRequest))
      .then((res) => setMovie(res))
      .catch((error) => console.log(error));
  }, [idForRequest, match, movieId]);

  return (
    <>
      <GoBackBtn />
      {movie && <MovieDetails movie={movie} />}
      <Navigation routes={additionalMovieInfo} match={match.url} />
      <RoutesList routes={additionalMovieInfo} match={match.url} />
    </>
  );
};

export default MovieDetailesPage;
