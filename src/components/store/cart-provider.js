import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReduer = (state, action) => {
  switch (action) {
    case "ADD":
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      }
      default: 
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReduer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item})
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id})
  };

  const cartValues = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
