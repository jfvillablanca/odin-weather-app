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
    const weatherData = Object.assign({}, rawData.main);
    return weatherData;
  }
};
