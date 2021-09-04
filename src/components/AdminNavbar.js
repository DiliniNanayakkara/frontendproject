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
      <div className="AllNavItem">
    <div className="logo">
    <a className="active" >  <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          De'lart
          <i class="fas fa-palette"></i>
        </Link></a>
    </div>
    <div class="topnav">
  
  <a >  <Link to='/dashbord'  onClick={closeMobileMenu}>
             Dashbord
            </Link></a>
            <a> <Link
              to='/users'
            
              onClick={closeMobileMenu}
            >
              Users
            </Link></a>
           
  <a> <Link
              to='/addmodarator'
             
              onClick={closeMobileMenu}
            >
                Add Modarator
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

export default AdminNavbar;