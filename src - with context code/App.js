import React, { createContext } from "react";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

const modalContext = createContext({
  showCart: false,
  onOpen: () => {},
  onClose: () => {},
});

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <modalContext.Provider
      value={{
        showCart: showCart,
        onOpen: showCartHandler,
        onClose: hideCartHandler,
      }}
    >
      <Header />
      {showCart && <Cart />}
      <main>
        <Meals />
      </main>
    </modalContext.Provider>
  );
}

export default App;
export { modalContext };
