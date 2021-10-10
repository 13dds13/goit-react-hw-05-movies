const getIdFromURL = (string) => {
  const id = string
    .split("")
    .reduce((acc, item) => {
      !isNaN(item) && acc.push(item);
      return acc;
    }, [])
    .join("");

  return id;
};

export default getIdFromURL;
