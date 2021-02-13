import React, { useContext } from "react";
import "./CheckoutProduct.css";
import { Basket } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const { basket, removeFromBasket } = useContext(Basket);

  const removeFromBasketHandler = () => {
    removeFromBasket(id);
  };

  return (
    <div className="checkoutProduct">
      <img alt="" className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasketHandler}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
