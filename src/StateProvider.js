import React, { createContext, useContext, useState } from "react";

const Basket = createContext({
  basket: [],
  addToBasket: (product) => {},
  removeToBasket: (productId) => {}
});

const StateProvider = (props) => {
  const [basket, setBasket] = useState([]);
  const addToBasket = (product) => {
    setBasket(basket.concat(product));
  };
  const removeToBasket = (productId) => {
    setBasket(basket.map((product) => product.id === productId));
  };
  return (
    <Basket.Provider
      value={{
        basket: basket,
        addToBasket: addToBasket,
        removeToBasket,
        removeToBasket
      }}
    >
      {props.children}
    </Basket.Provider>
  );
};

export default StateProvider;
