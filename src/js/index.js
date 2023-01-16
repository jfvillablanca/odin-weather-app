const API_KEY = "f23670da91c3a4b07ec78478022186d0";

const queryForm = () => {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  const submit = document.createElement("button");
  submit.textContent = "Search City";

  const form = document.createElement("form");
  form.appendChild(input);
  form.appendChild(submit);
  return form;
};

const body = document.querySelector("body");
body.appendChild(queryForm());

const callApi = async (queryCity) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&APPID=${API_KEY}&units=metric`
  );
  const rawData = await response.json();
  if (+rawData.cod !== 200) {
    console.log(rawData);
    return "error";
  } else {
    const weatherData = Object.assign(
      {},
      {
        name: rawData.name,
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
    console.log(callApi(input.value));
  } catch (error) {
    throw new Error(error);
  }
  return false;
};
