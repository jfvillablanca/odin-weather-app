import "../css/styles.css";
const SVGInject = require("svg-inject");
import * as Images from "./images.js";

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
      // FIXME: Throw DOM notice if location does not exist
      rawData[0].lat,
      rawData[0].lon,
      rawData[0].name
    );
    return weatherData;
  }
};

const formatDateTime = (dt, tzOffset, isDate) => {
  const adjustedTime = (dt + tzOffset) * 1000; // convert to milliseconds
  const timeInLocal = new Date(adjustedTime);
  const timeInUTC = timeInLocal.toUTCString();

  if (isDate) {
    const getFullDate =
      timeInUTC.split(" ").slice(0, 4).join(" ") +
      " at " +
      timeInUTC.split(" ")[4] +
      " in ";
    return getFullDate;
  } else {
    const getHourAndMinute = timeInUTC.split(" ")[4].slice(0, 5);
    return getHourAndMinute;
  }
};

const getCurrentWeather = async (lat, lon, location) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
  );
  const rawData = await response.json();
  if (+rawData.cod !== 200) {
    return `Error: Current Weather API => Status Code: ${rawData.cod}`;
  } else {
    const tzOffset = rawData.timezone || null;
    const localTime = rawData.dt || null;
    const sunriseTime = rawData.sys.sunrise || null;
    const sunsetTime = rawData.sys.sunset || null;

    let isDaytime;
    if (localTime >= sunriseTime && localTime < sunsetTime) {
      isDaytime = true;
    } else {
      isDaytime = false;
    }
    const weatherData = Object.assign(
      {},
      {
        time: formatDateTime(localTime, tzOffset, true),
        isDayOrNight: isDaytime ? "d" : "n",
        name: location,
        name_latlon: rawData.name || null,
        main_temp_ave: rawData.main.temp || null,
        main_temp_feels_like: rawData.main.feels_like || null,
        main_temp_min: rawData.main.temp_min || null,
        main_temp_max: rawData.main.temp_max || null,
        main_humidity: rawData.main.humidity || null,
        main_pressure: rawData.main.pressure || null,
        sys_country: rawData.sys.country || null,
        sys_sunrise: formatDateTime(sunriseTime, tzOffset, false),
        sys_sunset: formatDateTime(sunsetTime, tzOffset, false),
        weather_id: rawData.weather[0].id || null,
        weather_gist: rawData.weather[0].main || null,
        weather_desc: rawData.weather[0].description || null,
        weather_icon: rawData.weather[0].icon.slice(0, 2) || null,
        wind_angle: rawData.wind.deg || null,
        wind_speed: rawData.wind.speed || null,
      }
    );
    return weatherData;
  }
};

// NOTE: DOM STUFF

const searchbar = document.querySelector(".searchbar");
const input = document.querySelector("input[type='text']");
searchbar.onsubmit = () => tryQuery(input.value);

function tryQuery(queriedLocation) {
  try {
    queryLocation(queriedLocation)
      .then((weatherData) => {
        updateDOM(weatherData);
      })
      .catch((error) => {
        throw new Error(error);
      });
  } catch (error) {
    throw new Error(error);
  }
  return false;
}

function updateDOM(weatherData) {
  const weatherGist = document.querySelector(".weather-gist");
  weatherGist.textContent = weatherData.weather_gist;

  const weatherDescription = document.querySelector(".weather-desc");
  weatherDescription.textContent = weatherData.weather_desc;

  let weatherConditionIcon = document.querySelector(".weather-condition-icon");
  if (weatherConditionIcon.tagName === "svg") {
    const parent = weatherConditionIcon.parentElement;
    weatherConditionIcon.remove();
    weatherConditionIcon = document.createElement("img");
    weatherConditionIcon.classList.add("weather-condition-icon");
    weatherConditionIcon.setAttribute("alt", "weather icon");
    parent.prepend(weatherConditionIcon);
  }
  console.log(weatherConditionIcon);
  const id = weatherData.weather_id;
  const dn = weatherData.isDayOrNight;
  const ic = weatherData.weather_icon;

  weatherConditionIcon.setAttribute(
    "src",
    Images.WeatherIcon[`${ic}${dn}_${id}`]
  );

  const tempFeelsLike = document.querySelector(".temp-feels-like");
  tempFeelsLike.textContent = weatherData.main_temp_feels_like + " °C";

  const tempActual = document.querySelector(".temp-actual");
  tempActual.textContent = weatherData.main_temp_ave + " °C";

  const tempMin = document.querySelector(".temp-min");
  tempMin.textContent = weatherData.main_temp_min + " °C";

  const tempMax = document.querySelector(".temp-max");
  tempMax.textContent = weatherData.main_temp_max + " °C";

  const city = document.querySelector(".city");
  city.textContent = weatherData.name + ", ";

  const country = document.querySelector(".country");
  country.textContent = weatherData.sys_country;

  const sunrise = document.querySelector(".time-sunrise");
  sunrise.textContent = weatherData.sys_sunrise;

  const sunset = document.querySelector(".time-sunset");
  sunset.textContent = weatherData.sys_sunset;

  const measureTime = document.querySelector(".time-measure");
  measureTime.textContent = weatherData.time;

  const measureLocation = document.querySelector(".time-measure-loc");
  measureLocation.textContent = weatherData.name_latlon;

  const humidity = document.querySelector(".humidity");
  humidity.textContent = weatherData.main_humidity + "%";

  const pressure = document.querySelector(".pressure");
  pressure.textContent = weatherData.main_pressure + " hPa";

  const windSpeed = document.querySelector(".wind-speed");
  windSpeed.textContent = weatherData.wind_speed + " km/h";

  const windAngle = document.querySelector(".wind-angle");
  windAngle.textContent = weatherData.wind_angle + "°";

  injectSVG();
}

const locationIcon = document.querySelector(".location-icon");
locationIcon.setAttribute("src", Images.LocationIcon);
const sunriseIcon = document.querySelector(".time-sunrise-icon");
sunriseIcon.setAttribute("src", Images.SunriseIcon);
const sunsetIcon = document.querySelector(".time-sunset-icon");
sunsetIcon.setAttribute("src", Images.SunsetIcon);
const humidityIcon = document.querySelector(".humidity-icon");
humidityIcon.setAttribute("src", Images.HumidityIcon);
const pressureIcon = document.querySelector(".pressure-icon");
pressureIcon.setAttribute("src", Images.PressureIcon);
const windSpeedIcon = document.querySelector(".wind-speed-icon");
windSpeedIcon.setAttribute("src", Images.WindSpeedIcon);
const windAngleIcon = document.querySelector(".wind-angle-icon");
windAngleIcon.setAttribute("src", Images.WindAngleIcon);

function injectSVG() {
  const svgs = document.querySelectorAll('img[src$=".svg"]');
  for (let i = 0; i < svgs.length; i++) {
    SVGInject(svgs[i], function (err, _) {
      if (err) throw err;
    });
  }
}
injectSVG();
