const API_KEY = "f23670da91c3a4b07ec78478022186d0";

const callApi = async (queryCity) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&APPID=${API_KEY}`
  );
  const rawData = await response.json();
  return rawData;
};
