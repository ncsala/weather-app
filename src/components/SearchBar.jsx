import React from "react";
import { IoAdd } from "react-icons/io5";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = React.useState();

  function handleOnSearch() {
    if (typeof onSearch === "function") {
      // const input = document.getElementById("search-bar-input");
      // onSearch(input.value);
      // input.value = "";
      onSearch(search);
      setSearch("");
    }
  }

  return (
    <div className={styles.searchBar}>
      <input
        id="search-bar-input"
        placeholder="Busque una ciudad..."
        className={styles.input}
        autoComplete="off"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter') handleOnSearch();
        }}
      ></input>
      <button onClick={handleOnSearch} className={styles.button}>
        <IoAdd />
      </button>
    </div>
  );
}
