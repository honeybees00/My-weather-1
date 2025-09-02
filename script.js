//Nola current /
//const requestOptions = {
  method: "GET",
  redirect: "follow"
///};

//fetch("https://api.open-meteo.com/v1/forecast?latitude=29.95&longitude=-90.07&current_weather=true", requestOptions)
  //.then((response) => response.text())
  ////.then((result) => console.log(result))
//.catch((error) => console.error(error));
  //End of nola//
var newOrleansWeather=
  {
    "latitude": 29.95653,
    "longitude": -90.07374,
    "generationtime_ms": 0.07140636444091797,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 21.0,
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
        "time": "2025-09-02T03:15",
        "interval": 900,
        "temperature": 25.6,
        "windspeed": 5.2,
        "winddirection": 106,
        "is_day": 0,
        "weathercode": 2
    }
}
// Display weather data
setText("temp", newOrleansWeather.current_weather.temperature);
setText("wind", newOrleansWeather.current_weather.windspeed);
setText("code", newOrleansWeather.current_weather.weathercode);
