import React ,{useState, useEffect }from "react";
import '../css/Checkout.css';
import { Link } from 'react-router-dom';


function CheckoutComponent(props) {
    const [click, setClick] = useState(false);
  
    const closeMobileMenu = () => setClick(false);
  return (
    <main>
      <text className="del">Delivery Information :</text>
      <div className="pencil">
            <img className="pencile" src= { require('../../assests/artworks.png').default} alt="" width="300" height="300"></img>
        
            </div>
      <div className="inputForm">
      <form className="Form">
          <text className="rec">Recipient's Name  : </text>
        <input
          className="text"
          onChange={props.handleChange}
          name="firstName"
          placeholder="Your Name"
          value={props.Name}
        />
        <br />
        <text className="rec">Recipient's Phone : </text>
        <input
          className="text"
          onChange={props.handleChange}
          name="lastName"
          placeholder="Phone Number"
          value={props.phone}
        />
        <br />
        <text className="rec">Delivery Address  : </text>
        <input type="textarea"
          className="text"
          onChange={props.handleChange}
          name="age"
          placeholder="Address"
          value={props.address}
        />
        <br />
        <br />
        <br/>
        <text className="rec">Delivery City :  </text>
        <select
          className="destination-input"
          onChange={props.handleChange}
          name="destination"
          value={props.destination}
        >
          <option value="">-- Choose the Delivery City --</option>
          <option value="Thailand">Colombo</option>
          <option value="Japan">Kurunegala</option>
          <option value="Brazil">Horana</option>
          <option value="Brazil">Panadura</option>
          <option value="Brazil">Nugegoda</option>
        </select>
        <br />
        <br />
        <Link
                              to='/artworks'
                              onClick={closeMobileMenu}
                          ><button className="submit"> Continue    <i class="fa fa-chevron-right" aria-hidden="true"></i>        
                          </button> 
                          </Link>
        
      </form>
      </div>
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
       
    </main>
    
  );
}

export default CheckoutComponent;