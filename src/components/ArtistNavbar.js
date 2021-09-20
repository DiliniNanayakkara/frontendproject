import React, { useState } from "react";
import { Logout } from "./Logout";
import { Link } from "react-router-dom";
import "./Navbar.css";

function ArtistNavbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const logout = () => {
    localStorage.clear();
  };

  return (
    <>
      <div className="AllNavItem">
        <div className="logo">
          <a className="active">
            {" "}
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              De'lart
              <i class="fas fa-palette"></i>
            </Link>
          </a>
        </div>
        <div class="topnav">
          <a>
            {" "}
            <Link to="/artistartworks" onClick={closeMobileMenu}>
              Artworks
            </Link>
          </a>

          <a>
            {" "}
            <Link to="/artistproduct" onClick={closeMobileMenu}>
              Products
            </Link>
          </a>
          <a>
            {" "}
            <Link to="/exhibitions" onClick={closeMobileMenu}>
              Exhibitions
            </Link>
          </a>

          <a>
            {" "}
            <Link to="/artists" onClick={closeMobileMenu}>
              Artists
            </Link>
          </a>
          <a>
            {" "}
            <Link to="/Artist_profile" onClick={closeMobileMenu}>
              Profile
            </Link>
          </a>

          <a>
            {" "}
            <Link to="/" onClick={logout}>
              LogOut
            </Link>
          </a>
        </div>
      </div>
    </>
  );
}

export default ArtistNavbar;
