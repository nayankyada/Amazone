import React, { useContext } from "react";
import "./Product.css";
import { Basket } from "./StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const { basket, addToBasket } = useContext(Basket);
  const addtobasket = () => {
    addToBasket({
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating
    });
    console.log(basket);
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addtobasket}>Add to Basket</button>
    </div>
  );
};
export default Product;
