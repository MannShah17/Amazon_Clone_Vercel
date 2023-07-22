import React from 'react';
import { Link } from 'react-router-dom';
import '../cssComponents/Navbar.css'; // Import the CSS file

const Navbar = ({ cartItems }) => {
  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const formatCategoryName = (category) => {
    return category.toLowerCase().replace(/\s+/g, ' ');
  };

  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link to='/'>Company Logo</Link>
      </div>
      <div className='navbar__links'>
        <Link to='/'>Home</Link>
        <Link to={`/category/${formatCategoryName("men's clothing")}`}>
          Men's Clothings
        </Link>
        <Link to={`/category/${formatCategoryName("women's clothing")}`}>
          Women's Clothings
        </Link>
        <Link to='/category/jewelery'>Jewellery</Link>
        <Link to='/category/electronics'>Electronics</Link>
        <Link to='/cart'>
          <div className='navbar__cart'>
            <span className='navbar__cart-count'>{getTotalCartItems()}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
