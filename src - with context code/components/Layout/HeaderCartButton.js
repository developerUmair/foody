import React, { useContext } from "react";
import { modalContext } from "../../App";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

  const ctxMod = useContext(modalContext);

  return (
    <div className={classes.button} onClick={ctxMod.onOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </div>
  );
};

export default HeaderCartButton;
