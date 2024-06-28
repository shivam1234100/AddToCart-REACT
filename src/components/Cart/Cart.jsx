import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';

function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {Object.keys(cart).map((productId) => (
          <li key={productId}>
            {cart[productId].title} - Quantity: {cart[productId].quantity} - Category: {cart[productId].category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;