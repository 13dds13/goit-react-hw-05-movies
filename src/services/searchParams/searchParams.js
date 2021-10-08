import fetchData from "../../data/fetchData.json";

const searchParams = (type = "trending", query) => {
  const { baseURL, api_key } = fetchData;
  const searchType = fetchData.searchType[type];
  const searchParams = new URLSearchParams({
    api_key,
    query,
  });
  return `${baseURL}${searchType}?${searchParams}`;
};

export default searchParams;
