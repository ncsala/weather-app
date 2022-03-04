import React from "react";
import styles from "./App.module.css";
import fetchCity from "./services/fetchCity";
import CitiesPage from "./views/CitiesPage";
import { Route } from "react-router-dom";

function App() {
  const [cities, setCities] = React.useState([]);

  function onSearch(city) {
    if (cities.length > 6) {
      alert("No se pueden agregar más ciudades");
    } else {
      fetchCity(city, setCities);
    }
  }

  function handleOnClose(id) {
    setCities((prevData) => prevData.filter((city) => city.id !== id));
  }

  return (
    <div className={styles.app}>
      <div className={styles.bkg} />
      <div className={styles.container}>
        <Route path='/'>
          <CitiesPage
            cities={cities}
            handleOnClose={handleOnClose}
            onSearch={onSearch}
          />
        </Route>
      </div>
    </div>
  );
}

export default App;
