import { useState } from "react";
import styles from "./Item.module.css";

const Item = ({ foodItems, bought, handleBuyButtonClicked }) => {
  return (
    <>
      <li
        className={`${styles["kg-item"]} list-group-item kg-item ${bought && "active"} `}
      >
        <span className={styles["kg-span"]}>{foodItems}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={handleBuyButtonClicked}
        >
          buy
        </button>
      </li>
    </>
  );
};

export default Item;
