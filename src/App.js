import React from "react";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import data from "./data.js";
import styles from "./App.module.css";

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
// Para guardar el apiKey de forma segura
// const apiKey = process.env.REACT_APP_APIKEY;

function onSearch(ciudad) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        // setCities(oldCities => [...oldCities, ciudad]);
      } else {
        alert("Ciudad no encontrada");
      }
    });

  }

function App() {
  const [data, setData] = React.useState([])

  return (
    <div className={styles.app}>
      <div className={styles.bkg} />
      <div className={styles.container}>
        <div>
          <SearchBar onSearch={onSearch} />
        </div>

        <div className={styles.citiesContainer}>
          <Cards cities={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
