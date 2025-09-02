console.log current_
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
  onEvent 
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
    
}
// Display weather data
setText("temp", newOrleansWeather.current_weather.temperature);
setText("wind", newOrleansWeather.current_weather.windspeed);
setText("code", newOrleansWeather.current_weather.weathercode);
///end of nola
///Atlanta////
var AtlantaWeather=
{
    "latitude": 33.759865,
    "longitude": -84.39587,
    "generationtime_ms": 0.05626678466796875,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 321.0,
    "current_weather_units": {
        "time": "iso8601",
        "interval": "seconds",
        "temperature": "°C",
        "windspeed": "km/h",
        "winddirection": "°",
        "is_day": "",
        "weathercode": "wmo code"
    
   
}
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

//fetch("https://api.open-meteo.com/v1/forecast?latitude=33.759865&longitude=-84.39587&current_weather=true", requestOptions)
//  .then((response) => response.text())
//  .then((result) => console.log(result))
//  .catch((error) => console.error(error));
//Display Atlanta weather///
setText("temp", AtlantaWeatherWeather.current_weather.temperature);
setText("wind", AtlantaWeather.current_weather.windspeed);
setText("code", AtlantaWeather.current_weather.weathercode);
///end of Atlanta Weather///
///New your Weather///
Var NewyorkWeather=
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
//Los Angeles///
var LosAngelesWeather=
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

//fetch("https://api.open-meteo.com/v1/forecast?latitude=34.05&longitude=-118.24&current_weather=true", requestOptions)
  //.then((response) => response.text())
  //.then((result) => console.log(result))
  //.catch((error) => console.error(error));
  setText("temp", LosAngelesWeather.current_weather.temperature);
setText("wind", LosAngelesWeather.current_weather.windspeed);
setText("code", LosAngelesWeather.current_weather.weathercode);
///End of Los Ageles///
///Ocean City Nj///
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
///Seattle////
var SeattleWeather=
{
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
}
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

//fetch("https://api.open-meteo.com/v1/forecast?latitude=47&longitude=122&current_weather=true", requestOptions)
  //.then((response) => response.text())
  ///.then((result) => console.log(result))
////  .catch((error) => console.error//(error));
setText("temp", SeattleWeather.current_weather.temperature);
setText("wind", SeattleWeather.current_weather.windspeed);
setText("code", SeattleWeather.current_weather.weathercode);