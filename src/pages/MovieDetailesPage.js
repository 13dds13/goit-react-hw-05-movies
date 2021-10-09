import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import RoutesList from "../components/routesList/RoutesList";
import { routesForMovieDetailsPage } from "../routes/routesForMovieDetailsPage";
import fetchMovieData from "../services/fetchMovieData/fetchMovieData";
import { searchParamsWithId } from "../services/searchParams/searchParams";

const MovieDetailesPage = () => {
  const [idForRequest, setId] = useState("");
  const [movie, setMovie] = useState({});
  const match = useRouteMatch();
  const { movieId } = match.params;

  useEffect(() => {
    setId(movieId);
  }, [movieId]);

  useEffect(() => {
    if (!idForRequest) return;

    try {
      fetchMovieData(searchParamsWithId(idForRequest)).then((res) =>
        setMovie(res)
      );
    } catch (error) {
      console.log(error);
    }
  }, [idForRequest]);

  return (
    <>
      {movie.poster_path && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`poster of the movie ${movie.original_title}`}
            width="256"
            height="auto"
          />
          <h2>{movie.original_title}</h2>
          <p>User score: {Math.round(movie.vote_average * 10)}%</p>
          <p>OverView: {movie.overview}</p>
          <p>
            Genres:{" "}
            {movie.genres.map(({ id, name }) => (
              <span key={id}>{name} </span>
            ))}
          </p>
        </>
      )}

      <Navigation routes={routesForMovieDetailsPage.additionalMovieInfo} />
      <RoutesList routes={routesForMovieDetailsPage.additionalMovieInfo} />
    </>
  );
};

export default MovieDetailesPage;
