var nolaWeather = {
  latitude: 29.983126,
  longitude: -90.07125,
  generationtime_ms: 0.05745887756347656,
  utc_offset_seconds: 0,
  timezone: "GMT",
  timezone_abbreviation: "GMT",
  elevation: 3.0,
  current_weather_units: {
    time: "iso8601",
    interval: "seconds",
    temperature: "°C",
    windspeed: "km/h",
    winddirection: "°",
    is_day: "",
    weathercode: "wmo code",
  },
  current_weather: {
    time: "2025-09-10T16:45",
    interval: 900,
    temperature: 30.8,
    windspeed: 17.0,
    winddirection: 84,
    is_day: 1,
    weathercode: 1,
  },
};

// Display weather data
setText("temp",nolaWeather.current_weather.temperature);
setText("wind", nolaWeather.current_weather.windspeed);
setText("code", nolaWeather.current_weather.weathercode);
///end of nola
