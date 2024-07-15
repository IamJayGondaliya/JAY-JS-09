const loadData = async () => {
  const url =
    "https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "2e59e3a545mshd803fd1ed71a23cp1eb9c0jsne0d6a0bc95b6",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.data.products);

    createUi(result.data.products);
  } catch (error) {
    console.error(error);
  }
};

const createUi = (data) => {};

loadData();
