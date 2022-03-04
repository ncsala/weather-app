// const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
// Para guardar el apiKey de forma segura
const apiKey = process.env.REACT_APP_APIKEY;

export default function fetchCity(city, setCities) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((r) => r.json())
    .then((recurso) => {
      if (recurso.main !== undefined) {
        const city = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          temp: recurso.main.temp,
          name: recurso.name,
        };
        setCities((oldCities) => [...oldCities, city]);
      } else {
        alert("Ciudad no encontrada");
      }
    });
}
