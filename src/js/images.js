import Atmosphere_1_1 from "../images/weather/atmosphere_1_1.svg";
import Clear_1_1 from "../images/weather/clear_1_1.svg";
import Clear_1_2 from "../images/weather/clear_1_2.svg";
import Cloud_1_1 from "../images/weather/cloud_1_1.svg";
import Cloud_1_2 from "../images/weather/cloud_1_2.svg";
import Cloud_2_1 from "../images/weather/cloud_2_1.svg";
import Drizzle_1_1 from "../images/weather/drizzle_1_1.svg";
import Drizzle_1_2 from "../images/weather/drizzle_1_2.svg";
import Drizzle_2_1 from "../images/weather/drizzle_2_1.svg";
import Drizzle_2_2 from "../images/weather/drizzle_2_2.svg";
import Rain_1_1 from "../images/weather/rain_1_1.svg";
import Rain_1_2 from "../images/weather/rain_1_2.svg";
import Rain_2_1 from "../images/weather/rain_2_1.svg";
import Rain_2_2 from "../images/weather/rain_2_2.svg";
import Rain_3_1 from "../images/weather/rain_3_1.svg";
import Rain_3_2 from "../images/weather/rain_3_2.svg";
import Rain_4_1 from "../images/weather/rain_4_1.svg";
import Snow_1_1 from "../images/weather/snow_1_1.svg";
import Snow_1_2 from "../images/weather/snow_1_2.svg";
import Snow_2_1 from "../images/weather/snow_2_1.svg";
import Snow_2_2 from "../images/weather/snow_2_2.svg";
import Snow_3_1 from "../images/weather/snow_3_1.svg";
import Storm_1_1 from "../images/weather/storm_1_1.svg";
import Storm_1_2 from "../images/weather/storm_1_2.svg";
import Storm_2_1 from "../images/weather/storm_2_1.svg";
import Storm_2_2 from "../images/weather/storm_2_2.svg";
import Storm_3_1 from "../images/weather/storm_3_1.svg";
import Storm_4_1 from "../images/weather/storm_4_1.svg";
import _Temp_1 from "../images/weather/temp_thermometer_1.svg";
import _Temp_2 from "../images/weather/temp_thermometer_2.svg";
import _Temp_3 from "../images/weather/temp_thermometer_3.svg";
import _Temp_4 from "../images/weather/temp_thermometer_4.svg";
import _Temp_5 from "../images/weather/temp_thermometer_5.svg";
import LoadingIcon from "../images/loader.svg";
import LocationIcon from "../images/map-pin.svg";
import SunriseIcon from "../images/weather/sys_sunrise.svg";
import SunsetIcon from "../images/weather/sys_sunset.svg";
import HumidityIcon from "../images/weather/main_humidity.svg";
import PressureIcon from "../images/weather/main_pressure.svg";
import WindSpeedIcon from "../images/weather/wind_speed.svg";
import WindAngleIcon from "../images/weather/wind_angle.svg";

const WeatherIcon = {
  "11d_200": Storm_1_1,
  "11d_210": Storm_1_1,
  "11d_230": Storm_1_1,
  "11n_200": Storm_1_2,
  "11n_210": Storm_1_2,
  "11n_230": Storm_1_2,

  "11d_201": Storm_2_1,
  "11d_211": Storm_2_1,
  "11d_231": Storm_2_1,
  "11n_201": Storm_2_2,
  "11n_211": Storm_2_2,
  "11n_231": Storm_2_2,

  "11d_202": Storm_3_1,
  "11d_232": Storm_3_1,
  "11n_202": Storm_3_1,
  "11n_232": Storm_3_1,

  "11d_212": Storm_4_1,
  "11d_221": Storm_4_1,
  "11n_212": Storm_4_1,
  "11n_221": Storm_4_1,

  "09d_313": Drizzle_1_1,
  "09d_321": Drizzle_1_1,
  "09n_313": Drizzle_1_2,
  "09n_321": Drizzle_1_2,

  "09d_302": Drizzle_2_1,
  "09d_312": Drizzle_2_1,
  "09d_314": Drizzle_2_1,
  "09n_302": Drizzle_2_2,
  "09n_312": Drizzle_2_2,
  "09n_314": Drizzle_2_2,

  "10d_500": Rain_1_1,
  "09d_520": Rain_1_1,
  "09d_521": Rain_1_1,
  "09d_300": Rain_1_1,
  "09d_301": Rain_1_1,
  "09d_310": Rain_1_1,
  "09d_311": Rain_1_1,
  "10n_500": Rain_1_2,
  "09n_520": Rain_1_2,
  "09n_521": Rain_1_2,
  "09n_300": Rain_1_2,
  "09n_301": Rain_1_2,
  "09n_310": Rain_1_2,
  "09n_311": Rain_1_2,

  "10d_501": Rain_3_1,
  "10n_501": Rain_3_2,

  "10d_502": Rain_4_1,
  "10d_503": Rain_4_1,
  "10d_504": Rain_4_1,
  "10n_502": Rain_4_1,
  "10n_503": Rain_4_1,
  "10n_504": Rain_4_1,

  "09d_522": Rain_2_1,
  "09d_531": Rain_2_1,
  "09n_522": Rain_2_2,
  "09n_531": Rain_2_2,

  "13d_600": Snow_1_1,
  "13d_601": Snow_1_1,
  "13d_615": Snow_1_1,
  "13d_620": Snow_1_1,
  "13n_600": Snow_1_2,
  "13n_601": Snow_1_2,
  "13n_615": Snow_1_2,
  "13n_620": Snow_1_2,

  "13d_611": Snow_2_1,
  "13d_612": Snow_2_1,
  "13d_613": Snow_2_1,
  "13d_616": Snow_2_1,
  "13d_511": Snow_2_1,
  "13n_611": Snow_2_2,
  "13n_612": Snow_2_2,
  "13n_613": Snow_2_2,
  "13n_616": Snow_2_2,
  "13n_511": Snow_2_2,

  "13d_602": Snow_3_1,
  "13d_621": Snow_3_1,
  "13d_622": Snow_3_1,
  "13n_602": Snow_3_1,
  "13n_621": Snow_3_1,
  "13n_622": Snow_3_1,

  "50d_701": Atmosphere_1_1,
  "50d_711": Atmosphere_1_1,
  "50d_721": Atmosphere_1_1,
  "50d_731": Atmosphere_1_1,
  "50d_741": Atmosphere_1_1,
  "50d_751": Atmosphere_1_1,
  "50d_761": Atmosphere_1_1,
  "50d_762": Atmosphere_1_1,
  "50d_771": Atmosphere_1_1,
  "50d_781": Atmosphere_1_1,

  "01d_800": Clear_1_1,
  "01n_800": Clear_1_2,

  "02d_801": Cloud_1_1,
  "03d_802": Cloud_1_1,
  "04d_803": Cloud_1_1,
  "02n_801": Cloud_1_2,
  "03n_802": Cloud_1_2,
  "04n_803": Cloud_1_2,

  "04d_804": Cloud_2_1,
  "04n_804": Cloud_2_1,
};

export {
  HumidityIcon,
  LoadingIcon,
  LocationIcon,
  PressureIcon,
  SunriseIcon,
  SunsetIcon,
  WeatherIcon,
  WindAngleIcon,
  WindSpeedIcon,
};
