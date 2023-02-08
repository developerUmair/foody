import React from "react";
import Modal from "../UI/Modal";
import classes from "./cart.module.css";

const Cart = (props) => {


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
    <Modal onCloseCart={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>30.50</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
