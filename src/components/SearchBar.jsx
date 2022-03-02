import React from "react";
import { IoAdd } from "react-icons/io5";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  function handleOnSearch() {
    if (typeof onSearch === "function") {
      const input = document.getElementById("search-bar-input");
      onSearch(input.value);
    }
  }

  return (
    <div className={styles.searchBar}>
      <input id="search-bar-input" placeholder="Busque una ciudad..." className={styles.input}></input>
      <button onClick={handleOnSearch} className={styles.button}>
        <IoAdd />
      </button>
    </div>
  );
}
