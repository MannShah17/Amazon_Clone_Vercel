import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import '../cssComponents/Sort.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductList = ({ cartItems, setCartItems }) => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [sortingOption, setSortingOption] = useState('price-asc');

  useEffect(() => {
    let url = 'https://fakestoreapi.com/products';

    if (category) {
      url += `/category/${category}`;
    }
    axios
      .get(url)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, [category]);
  const sortProducts = (option) => {
    switch (option) {
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...products].sort((a, b) => b.rating.rate - a.rating.rate);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(sortingOption);

  return (
    <>
      <h1>Welcome to Amazon Clone</h1>
      <div className='sorting-container'>
        <label htmlFor='sorting'>Sort by:</label>
        <select
          id='sorting'
          value={sortingOption}
          onChange={(e) => setSortingOption(e.target.value)}
        >
          <option value='price-asc'>Price (Low to High)</option>
          <option value='price-desc'>Price (High to Low)</option>
          <option value='rating'>Rating</option>
        </select>
      </div>
      <div className='product-list'>
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
