import React from "react";
import CardTemp from "./CardTemp";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Card({ max, min, name, img, onClose }) {
  // Se Corrobora que onClose sea una funcion, si lo es se ejecuta
  function handleOnClose() {
    if (typeof onClose === "function") onClose();
  }

  return (
    <div className={styles.card}>
      <span className={styles.name}>
        {name}{" "}
        <button onClick={handleOnClose} className={styles.button}>
          <IoCloseCircleOutline />
        </button>
      </span>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="Icono del clima"
      ></img>
      <div className={styles.temps}>
        <CardTemp label="Min" value={min} />
        <CardTemp label="Max" value={max} />
      </div>
    </div>
  );
}

// Esto es una buena practica para ver los errores que hay con los tipos de datos q se estan esperando
Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,
};
