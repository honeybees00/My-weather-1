///New your Weather///

var NewyorkWeather=
{
    "latitude": 40.710335,
    "longitude": -73.99309,
    "generationtime_ms": 0.08273124694824219,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 27.0,
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
        "time": "2025-09-02T16:30",
        "interval": 900,
        "temperature": 24.5,
        "windspeed": 9.9,
        "winddirection": 80,
        "is_day": 1,
        "weathercode": 3
    }
}
//const requestOptions = {
 // method: "GET",
//  redirect: "follow"
//};

//fetch("https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true", requestOptions)
//  .then((response) => response.text())
 // .then((result) => console.log(result))
//  .catch((error) => console.error(error));
setText("temp", newyorkWeather.current_weather.temperature);
setText("wind", newyorkWeather.current_weather.windspeed);
setText("code", newyorkWeather.current_weather.weathercode);
///End of new york////