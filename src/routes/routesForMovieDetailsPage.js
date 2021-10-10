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
      path: "/cast",
      exact: true,
      component: lazy(() =>
        import("../components/cast/Cast" /* webpackChunkName: "Cast" */)
      ),
    },

    {
      name: "Reviews",
      path: "/reviews",
      exact: true,
      component: lazy(() =>
        import(
          "../components/reviews/Reviews" /* webpackChunkName: "Reviews" */
        )
      ),
    },
  ],
};
