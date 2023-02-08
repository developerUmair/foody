import React from "react";
import classes from "./Header.module.css";
import mealsImg from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {

  return (
    <>
      <header className={classes.header}>
        <h1>Foody</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="hero-img" />
      </div>
    </>
  );
};

export default Header;
