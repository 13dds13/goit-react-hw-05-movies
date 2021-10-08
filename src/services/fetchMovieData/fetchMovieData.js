const fetchMovieData = async (dataForRequest) => {
  const datafromAPI = await fetch(dataForRequest);
  try {
    if (!datafromAPI.ok) {
      throw new Error();
    }
    return datafromAPI.json();
  } catch (error) {
    return error;
  }
};

export default fetchMovieData;
