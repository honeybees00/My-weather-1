var AtlantaWeather=
///{
    //"latitude": 33.759865,
   // "longitude": -84.39587,
    //"generationtime_ms": 0.05626678466796875,
    //"utc_offset_seconds": 0,
    //"timezone": "GMT",
    //"timezone_abbreviation": "GMT",
    //"elevation": 321.0,
    //"current_weather_units": {
       // "time": "iso8601",
        //"interval": "seconds",
        //"temperature": "°C",
       // "windspeed": "km/h",
        //"winddirection": "°",
        //"is_day": "",
        //"weathercode": "wmo code"
    
   
//}
const requestOptions = {
  method: "GET",
  redirect: "follow"
};
Var AtlantaWeather={}
fetch("https://api.open-meteo.com/v1/forecast?latitude=33.759865&longitude=-84.39587&current_weather=true", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
 .catch((error) => console.error(error));
//Display Atlanta weather///
setText("temp", AtlantaWeather.current_weather.temperature);
setText("wind", AtlantaWeather.current_weather.windspeed);
setText("code", AtlantaWeather.current_weather.weathercode);
///end of Atlanta Weather///