import '../css/CartTable.css';
import React, {useState, useEffect }from 'react';
import Navbar from '../Navbar';
import CartTable from './CartTable';
import { Link } from 'react-router-dom';

export default function Cart() {
    const [click, setClick] = useState(false);
  
    const closeMobileMenu = () => setClick(false);
  return (
     <div className="A"> 
      <Navbar/><br/><br/>
      <text className="carthead">Your Cart</text>
      <CartTable/><br/><br/><br/><br/><br/>
      <Link
                              to='/artworks'
                              onClick={closeMobileMenu}
                          ><button className="continue"><i class="fa fa-arrow-left" aria-hidden="true"></i>   Continue Shopping       
                          </button> 
                          </Link>
                          <Link
                              to='/checkout'
                              onClick={closeMobileMenu}
                          ><button className="checkout"> <i class="fa fa-shopping-cart" aria-hidden="true"></i>               Checkout         
                          </button> 
                          </Link>
         <div className="footer">
        <div className="footercard">
          <h1>De'lart</h1>
          <h3>Contact Us</h3>
          <p>Contact Us</p>
          <p>Legal Notices</p>
          <p>General Terms and Conditions</p>
          <p>My Profile</p>
          <p>Help Center</p>
          <p>Call: +119876677</p>
          <p>Emails:delart@gmail.com</p>
          
        </div>
        <div className="footercard">
        <h3>Who are we</h3>
          <p>About Us</p>
          <p>Our Artists</p>
          <p>Exibitions</p>
          <p>Contact</p>
          <p>Our PRoducts</p>
         
         
        
        </div>
        <div className="footercard">
        <h3>Are you an Artist</h3>
          <p>How to join Delart</p>
          <p>Login for Artist</p>
          <p>Art Gallery</p>
          <h3>Are you an Buyer</h3>
          <p>How to join Delart</p>
          <p>Login for Buyer</p>
          <p>Art Gallery</p>
          <p>Artists</p>
         
         
        </div>
        <div className="footercard">
        <h3>Sign Up</h3>
          <p>Artist can usr this system for sell their Artworks.Buyers can purches Artworks.
            First SignUp ! it's Free!
          </p>
          <center><div className="fbutton">SignUp</div></center>
        </div>
        </div>
    </div>
  );
}