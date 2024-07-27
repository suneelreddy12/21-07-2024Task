import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, totalQuantity, totalAmount } = useContext(CartContext);

  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div>
        <h3>Total Quantity: {totalQuantity}</h3>
        <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
