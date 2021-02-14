import React, { createContext, useContext, useState } from "react";

export const Basket = createContext({
  basket: [],
  user: null,
  login: (u) => {},
  addToBasket: (product) => {},
  removeFromBasket: (productId) => {}
});

const StateProvider = (props) => {
  const [user, setUser] = useState(null);
  const [basket, setBasket] = useState([]);
  const addToBasket = (product) => {
    // const idx = basket.findIndex((items) => items.id === product.id);
    // if (idx >= 0) {
    //   alert(`Product with ProductId - ${product.id} already in basket`);
    // } else {
    setBasket(basket.concat(product));
    // }
  };
  const removeFromBasket = (productId) => {
    const newBasket = [...basket];
    const index = basket.findIndex((items) => items.id === productId);
    newBasket.splice(index, 1);
    console.log(newBasket);
    setBasket(newBasket);
  };
  const setUsers = (u) => {
    console.log("StateProvider --- ", u);
    setUser(u);
  };
  return (
    <Basket.Provider
      value={{
        basket: basket,
        user: user,
        login: setUsers,
        addToBasket: addToBasket,
        removeFromBasket: removeFromBasket
      }}
    >
      {props.children}
    </Basket.Provider>
  );
};

export default StateProvider;
