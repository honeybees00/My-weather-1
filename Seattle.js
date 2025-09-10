

// Display Seattle  weather data

    "latitude": 47.0,
    "longitude": 122.0,
    "generationtime_ms": 0.049233436584472656,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 437.0,
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
        "temperature": 15.6,
        "windspeed": 4.8,
        "winddirection": 13,
        "is_day": 0,
        "weathercode": 3
    }
    const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://open-meteo.com/en/docs?current=apparent_temperature&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch&latitude=47.6062,NaN,NaN&longitude=-122.3321,NaN,NaN&hourly=temperature_2m,rain,wind_speed_10m,weather_code", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
setText("temp", SeattleWeather.current_weather.temperature);
setText("wind", SeattleWeather.current_weather.windspeed);
setText("code", SeattleWeather.current_weather.weathercode);
{