import "../css/styles.css";

const API_KEY = "f23670da91c3a4b07ec78478022186d0";

const queryLocation = async (location) => {
  const response = await fetch(
    ` https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&APPID=${API_KEY}`
  );
  const rawData = await response.json();
  if (+rawData.cod >= 400) {
    return `Error: Geocoding API => Status Code: ${rawData.cod}`;
  } else {
    const weatherData = await getCurrentWeather(
      rawData[0].lat,
      rawData[0].lon,
      rawData[0].name
    );
    return weatherData;
  }
};

const formatDateTime = (dt) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dt *= 1000; // convert to milliseconds
  return `${new Intl.DateTimeFormat("en-US", options).format(new Date(dt))}`;
};

const getCurrentWeather = async (lat, lon, location) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
  );
  const rawData = await response.json();
  if (+rawData.cod !== 200) {
    console.log(rawData);
    return `Error: Current Weather API => Status Code: ${rawData.cod}`;
  } else {
    const weatherData = Object.assign(
      {},
      {
        name: location,
        name_latlon: rawData.name,
        time: formatDateTime(rawData.dt),
        temp_ave: rawData.main.temp,
        temp_feels_like: rawData.main.feels_like,
        temp_min: rawData.main.temp_min,
        weather_desc: rawData.weather[0].description,
        weather_icon: rawData.weather[0].icon,
        wind_angle: rawData.wind.deg,
        wind_speed: rawData.wind.speed,
      }
    );
    return weatherData;
  }
};

const form = document.querySelector("form");
form.onsubmit = () => {
  try {
    const input = document.querySelector("input");
    queryLocation(input.value)
      .then((weatherData) => {
        console.log(weatherData);
      })
      .catch((error) => {
        throw new Error(error);
      });
  } catch (error) {
    throw new Error(error);
  }
  return false;
};
