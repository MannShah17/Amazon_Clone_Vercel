import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className='cart-container'>
      <h2>Thank you for your order!</h2>
      <p>Your order has been placed successfully.</p>
      <Link to='/'>
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default ThankYou;
