import React from "react";
import styles from "./FoodItems.module.css";
import { useContext } from "react";
import { appContext } from "../store/store";

function FoodItems() {
  let { items, addToCart } = useContext(appContext);

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {items.map((item) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
              <div className={styles.card}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.image}
                />

                <div className={styles.content}>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <button
                    className={styles.btn}
                    onClick={() => {
                      addToCart(item.id);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FoodItems;
