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
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          De'lart
          <i class="fas fa-palette"></i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/customer_home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/customer_artworks'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Artworks <i className='fas fa-caret-down' />
            </Link>
            {customer_dropdown && <Customer_Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/customer_products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/pencilarts'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Pencile Arts
            </Link>
          </li>
           <li className='nav-item'>
            <Link
              to='/exhibitions'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            Exhibitions
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/buyerdashbord'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              BuyerDashbord
            </Link>
          </li>
          
          <li>
            <Link
              to='/'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Logout
            </Link>
          </li>
        </ul>
        <Logout />
      </nav>
    </>
  );
}

export default RegCusNavbar;