import { lazy } from "react";

export const routesForMovieDetailsPage = {
  generalMovieDetails: [
    {
      name: "Movie details",
      path: "/movies/:movieId",
      exact: false,
      component: lazy(() =>
        import(
          "../pages/MovieDetailesPage" /* webpackChunkName: "MovieDetailesPage" */
        )
      ),
    },
  ],

  additionalMovieInfo: [
    {
      name: "Cast",
      path: "/movies/:movieId/cast",
      exact: true,
      component: lazy(() =>
        import(
          "../components/movieData/cast/Cast" /* webpackChunkName: "Cast" */
        )
      ),
    },

    {
      name: "Reviews",
      path: "/movies/:movieId/reviews",
      exact: true,
      component: lazy(() =>
        import(
          "../components/movieData/reviews/Reviews" /* webpackChunkName: "Reviews" */
        )
      ),
    },
  ],
};
