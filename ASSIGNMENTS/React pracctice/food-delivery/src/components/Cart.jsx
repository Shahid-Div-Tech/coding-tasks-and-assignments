import { useContext } from "react";
import styles from "./Cart.module.css";
import { appContext } from "../store/store";

function Cart() {
  let { addToCartItems } = useContext(appContext);

  console.log(addToCartItems);

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.heading}>My Cart</h2>

      <div className={styles.cartItems}>
        {addToCartItems.map((cart) => {
          return (
            <div className={styles.card}>
              <img src={cart.image} alt="food" className={styles.image} />

              <div className={styles.details}>
                <h3>{cart.name}</h3>

                <div className={styles.quantityBox}>
                  <button className={styles.qtyBtn}>−</button>

                  <span className={styles.quantity}>2</span>

                  <button className={styles.qtyBtn}>+</button>
                </div>

                <span className={styles.price}>{cart.price}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.summary}>
        <h3>Total: $32</h3>

        <button className={styles.checkout}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
