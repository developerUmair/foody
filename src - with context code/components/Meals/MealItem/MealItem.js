import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.meal.price}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.name}>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
