import React, { useState } from 'react';
import { Logout } from './Logout';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Customer_Dropdown from './Customer_Dropdown';

function RegCusNavbar() {
  const [click, setClick] = useState(false);
  const [customer_dropdown, setCustomerDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setCustomerDropdown(false);
    } else {
      setCustomerDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setCustomerDropdown(false);
    } else {
      setCustomerDropdown(false);
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
  
  <a >  <Link to='/c_home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link></a>
            <a> <Link
              to='/customer_artists'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Artworks
            </Link></a>
           
  <a> <Link
              to='/customer_products'
             
              onClick={closeMobileMenu}
            >
              Products
            </Link></a>
            <a > <Link
              to='/customer_exhibitions'
           
              onClick={closeMobileMenu}
            >
              Exhibitions
            </Link></a>
            <a > <Link
              to='/customer_pencilarts'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Commissions
            </Link></a>
            <a > <Link
              to='/artists'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Artists
            </Link></a>
  <a > <Link
              to='/customer_home'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Dashbord
            </Link></a>
            <a > <Link
              to='/'
            
              onClick={closeMobileMenu}
            >
            LogOut
            </Link></a>

            
</div>
</div>
    
          
    </>
  );
}

export default RegCusNavbar;