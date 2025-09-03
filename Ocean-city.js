Var OceanCityNjWeather=
{
    "latitude": 39.0,
    "longitude": 74.0,
    "generationtime_ms": 0.037670135498046875,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 4882.0,
    "current_weather_units": {
        "time": "iso8601",
        "interval": "seconds",
        "temperature": "°C",
        "windspeed": "km/h",
        "winddirection": "°",
        "is_day": "",
        "weathercode": "wmo code"
    },
    "current_weather": {
        "time": "2025-09-02T16:45",
        "interval": 900,
        "temperature": -2.0,
        "windspeed": 6.7,
        "winddirection": 36,
        "is_day": 0,
        "weathercode": 1
    }
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

//fetch("https://api.open-meteo.com/v1/forecast?latitude=39.02& longitude=74&current_weather=true", requestOptions)
//  .then((response) => response.text())
  //.then((result) => console.log(result))
  //.catch((error) => console.error//(error));
  ///Display Weather//
  setText("temp", OceancityNjWeather.current_weather.temperature);
setText("wind", OceancityNjWeather.current_weather.windspeed);
setText("code", OceancityNjWeather.current_weather.weathercode);
///end of Ocean city Nj///