import React, { createContext, useContext, useState } from "react";

export const Basket = createContext({
  basket: [],
  addToBasket: (product) => {},
  removeFromBasket: (productId) => {}
});

const StateProvider = (props) => {
  const [basket, setBasket] = useState([]);
  const addToBasket = (product) => {
    setBasket(basket.concat(product));
  };
  const removeFromBasket = (productId) => {
    let index = basket.findIndex((prduct) => prduct.id === productId);
    console.log(index);
    let newBasket = [...basket];
    console.log(basket.reduce((a, b) => a + b.price, 0));
    console.log(newBasket.splice(index, 1));
    setBasket(newBasket.splice(index, 1));
  };
  return (
    <Basket.Provider
      value={{
        basket: basket,
        addToBasket: addToBasket,
        removeFromBasket: removeFromBasket
      }}
    >
      {props.children}
    </Basket.Provider>
  );
};

export default StateProvider;
