import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../css/moderator/M_navbar.css";
import {Logout} from '../../Logout';
import { colors } from '@material-ui/core';


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
      <nav className='navbar_mod'>
        <Link to='/' className='navbar-logo_mod' onClick={closeMobileMenu}>
          De'lart
          <i class="fas fa-palette"></i>
        </Link>
       
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        
        <li>
       
            <Link
              to='/'
              className='nav-links-mobile '
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

export default Navbar;