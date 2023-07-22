import React, { useEffect } from 'react';
import '../cssComponents/Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, setCartItems }) => {
  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

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

  useEffect(() => {
    // Saving cartItems to localStorage whenever it changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className='cart-container'>
      <h2>Cart Details</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className='cart-item'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='cart-item-image'
                />
                <div className='cart-item-details'>
                  <h3 className='cart-item-title'>{item.title}</h3>
                  <p className='cart-item-price'>${item.price}</p>
                  <div className='cart-item-quantity'>
                    Quantity:
                    <input
                      type='number'
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      min='1'
                    />
                  </div>
                </div>
                <div
                  className='cart-item-remove'
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </div>
              </li>
            ))}
          </ul>
          <p className='cart-total'>Order Total: ${getOrderTotal()}</p>
          {getDiscount() > 0 && <p>10% Discount: ${getDiscount()}</p>}
          <p className='cart-grand-total'>Grand Total: ${getGrandTotal()}</p>
          {getGrandTotal() > 0 && (
            <Link to='/checkout'>
              <button>Checkout</button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
