import fetchData from "../../data/fetchData.json";

export const searchParamsTrendingMovies = () => {
  const {
    baseURL,
    api_key,
    searchType: { trending },
  } = fetchData;

  const searchParams = new URLSearchParams({
    api_key,
  });

  return `${baseURL}${trending}?${searchParams}`;
};

export const searchParamsWithKeyword = (query) => {
  const {
    baseURL,
    api_key,
    searchType: { searchByKeyword },
    searchOptions,
  } = fetchData;

  const searchParams = new URLSearchParams({
    api_key,
    query,
    ...searchOptions,
  });

  return `${baseURL}${searchByKeyword}?${searchParams}`;
};

export const searchParamsWithId = (id) => {
  const {
    baseURL,
    api_key,
    searchType: { movieDetails },
  } = fetchData;

  const preparedSearchType = movieDetails + id;

  const searchParams = new URLSearchParams({
    api_key,
  });

  return `${baseURL}${preparedSearchType}?${searchParams}`;
};

export const searchParamsForAdditionalInfo = (id, infoType) => {
  const {
    baseURL,
    api_key,
    searchType,
    searchType: { movieDetails },
  } = fetchData;

  const preparedSearchType = movieDetails + id + searchType[infoType];

  const searchParams = new URLSearchParams({
    api_key,
  });
  return `${baseURL}${preparedSearchType}?${searchParams}`;
};
