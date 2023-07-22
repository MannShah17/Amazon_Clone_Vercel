import React, { useState } from 'react';
import ThankYou from './ThankYou';
import '../cssComponents/CheckOut.css';

const Checkout = ({ cartItems, setCartItems }) => {
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);

  const handleCheckout = () => {
    setCartItems([]);
    setIsCheckoutComplete(true);
  };

  if (!cartItems) {
    return <p>Your cart is empty.</p>;
  }

  if (isCheckoutComplete) {
    return <ThankYou />;
  }

  const getOrderTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getDiscount = () => {
    const orderTotal = getOrderTotal();
    return orderTotal > 2000 ? 0.1 * orderTotal : 0;
  };

  const getGrandTotal = () => {
    return getOrderTotal() - getDiscount();
  };

  return (
    <div className='cart-container'>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <p>Order Total: ${getOrderTotal()}</p>
          {getDiscount() > 0 && <p>Discount: ${getDiscount()}</p>}
          <p>Grand Total: ${getGrandTotal()}</p>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
