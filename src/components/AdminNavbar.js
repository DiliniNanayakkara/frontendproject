import React, { useState } from 'react';
import { Logout } from './Logout';
import { Link } from 'react-router-dom';
import './Navbar.css';


function AdminNavbar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  

  

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
            <Link to='/dashbord' className='nav-links' onClick={closeMobileMenu}>
              Dashbord
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/users'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            Users
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/addmodarator'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Add Modarator
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

export default AdminNavbar;