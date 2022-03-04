import React from "react";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";
import styles from "./CitiesPage.module.css";

export default function CitiesPage({ cities, handleOnClose, onSearch }) {
  return (
    <>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>

      <div className={styles.citiesContainer}>
        <Cards cities={cities} onClose={handleOnClose} />
      </div>
    </>
  );
}
