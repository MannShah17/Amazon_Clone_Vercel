import React from 'react';
import '../cssComponents/ProductCard.css';
import '../components/Cart';

const ProductCard = ({ product, cartItems, setCartItems }) => {
  const MAX_DESCRIPTION_WORDS = 50;

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > MAX_DESCRIPTION_WORDS) {
      return words.slice(0, MAX_DESCRIPTION_WORDS).join(' ') + '...';
    }
    return description;
  };
  const addToCart = () => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className='product-card'>
      <img
        src={product.image}
        alt={product.title}
        className='product-card__image'
      />
      <div className='product-card__content'>
        <h2 className='product-card__title'>{product.title}</h2>
        <p className='product-card__price'>${product.price}</p>
        <p className='product-card__description'>
          {truncateDescription(product.description)}
        </p>
        <p className='product-card__category'>{product.category}</p>
        <div className='product-card__rating'>
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </div>
        <button className='product-card__add-btn' onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
