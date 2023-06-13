import React from 'react';
import { Link } from 'react-router-dom';
import '../style/commonStyle.css';

const Navbar = () => {
  return (
    <div className='navbarWrapper'>
      <div className='logoContainer'>
        <Link to='/'>
          <img src='/food.png' alt='logo' width={'80px'} height={'20px'}/>
        </Link>
      </div>
      <div className='navLinkContainer'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/services'>Services</Link>
      </div>
    </div>
  )
}

export default Navbar;