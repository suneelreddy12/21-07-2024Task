import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div>
      <img src={item.image} alt={item.title} width="50" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div>
        <button onClick={() => decreaseQuantity(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => increaseQuantity(item.id)}>+</button>
      </div>
      <p>₹{item.price.toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
