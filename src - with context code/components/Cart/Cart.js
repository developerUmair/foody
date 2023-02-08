import React, { useContext } from "react";
import { modalContext } from "../../App";
import Modal from "../UI/Modal";
import classes from "./cart.module.css";

const Cart = (props) => {
  const ctxMod = useContext(modalContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: 1, name: "Grilled Fish", amount: 2, price: "6.00" }].map(
        (item) => (
          <li key={item.name}>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>30.50</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={ctxMod.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
