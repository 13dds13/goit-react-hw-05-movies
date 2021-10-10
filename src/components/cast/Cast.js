import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import fetchMovieData from "../../services/fetchMovieData/fetchMovieData";
import getIdFromURL from "../../services/getIdFromURL";
import { searchParamsForAdditionalInfo } from "../../services/searchParams/searchParams";
import { imgURL, imgPlug } from "../../data/fetchData.json";
import Notification from "../notification/Notification";
import { noDataToShow } from "../../data/messages.json";

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { pathname } = useLocation();

  const id = getIdFromURL(pathname);
  useEffect(() => {
    fetchMovieData(searchParamsForAdditionalInfo(id, "cast"))
      .then((res) => {
        if (!res.cast.length) return;

        const preparadedCast = res.cast.reduce(
          (acc, { original_name, profile_path }) => {
            acc.push({ original_name, profile_path });
            return acc;
          },
          []
        );
        setCast(preparadedCast);
      })
      .catch(console.log);
  }, [id]);

  return cast ? (
    <ul>
      {cast.map(({ original_name, profile_path }) => (
        <li key={original_name}>
          <img
            src={profile_path ? imgURL + profile_path : imgPlug}
            alt={original_name}
            width="128"
            height="192"
          />
          <p>{original_name}</p>
        </li>
      ))}
    </ul>
  ) : (
    <Notification msg={noDataToShow} />
  );
};

export default Cast;
