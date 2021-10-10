import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import fetchMovieData from "../../services/fetchMovieData/fetchMovieData";
import getIdFromURL from "../../services/getIdFromURL";
import { searchParamsForAdditionalInfo } from "../../services/searchParams/searchParams";
import Notification from "../notification/Notification";
import { noDataToShow } from "../../data/messages.json";

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { pathname } = useLocation();

  const id = getIdFromURL(pathname);

  useEffect(() => {
    fetchMovieData(searchParamsForAdditionalInfo(id, "reviews")).then(
      ({ results }) => {
        if (!results.length) return;

        const preparadedReviews = results.reduce((acc, { author, content }) => {
          acc.push({ author, content });
          return acc;
        }, []);

        setReviews(preparadedReviews);
      }
    );
  }, [id]);

  return reviews ? (
    <ul>
      {reviews.map(({ author, content }) => (
        <li key={author}>
          <p>{author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <Notification msg={noDataToShow} />
  );
};

export default Reviews;
