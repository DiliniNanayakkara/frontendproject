import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
    <div className="AllNavItem">
    <div className="logo">
    <a className="active" >  <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          De'lart
          <i class="fas fa-palette"></i>
        </Link></a>
    </div>
    <div class="topnav">
  
  <a >  <Link to='/'  onClick={closeMobileMenu}>
              Home
            </Link></a>
  <a > <Link
              to='/artworks'
           
              onClick={closeMobileMenu}
            >
              Artworks
            </Link></a>
           
  <a> <Link
              to='/products'
             
              onClick={closeMobileMenu}
            >
              Products
            </Link></a>
            <a> <Link
              to='/artists'
             
              onClick={closeMobileMenu}
            >
              Artists
            </Link></a>
            <a > <Link
              to='/artworks'
           
              onClick={closeMobileMenu}
            >
              Exhibitions
            </Link></a>
  <a> <Link
              to='/login'
             
              onClick={closeMobileMenu}
            >
              Login
            </Link></a>
  <a > <Link
              to='/signup'
            
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link></a>
</div>
</div>
    </>
  );
}

export default Navbar;
