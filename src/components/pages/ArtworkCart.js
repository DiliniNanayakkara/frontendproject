import '../css/CartTable.css';
import React, {useState, useEffect }from 'react';
import Navbar from '../Navbar';
import CartTable from './CartTable';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ArtworkCart() {
    const [click, setClick] = useState(false);
  const [toolList, setToolList] = useState([]);
  const [toolID, setToolID] = useState(window.location.pathname.split("/")[2]);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    setToolID(window.location.pathname.split("/")[2]);
  }, [window.location.pathname]);

  useEffect(() => {
    axios.get(`http://localhost:5000/confirmed`)
    .then((response) => {
           console.log(response.data);
           setToolList(response.data);
    });
  });
    
  return (
     <div className="A"> 
      <Navbar/><br/><br/>
      <text className="carthead">Your Cart</text>
      <table className="carttable">
                  <thead>
                      <tr className="carttable1">
                          <th className="th1">Artwork Name</th>
                          <th className="th2">Category</th>
                          <th className="th6">Unit Price</th>
                          <th className="th5">Artist</th>
                          <th className="th3">Sub Total</th>
                          <th>Actions</th>
                      </tr>
                      </thead>
              </table>
      {toolList.map((val) => {
                for(var i=0; i<toolList.length; i++){
                  return <table className="carttable">
                      <tr >
                          <td className="td1">{val.cart_tool}</td>
                          <td className="td2">{val.cart_category}</td>
                          <td className="td6">Rs. {val.cart_price / val.cart_quantity}.00</td>
                          <td className="td5">{val.cart_quantity}</td>
                          <td className="td3">Rs. {val.cart_price}.00</td>
                          <td className="td4"><i class="fa fa-trash" aria-hidden="true"></i></td>
                      </tr>
                      
                      {/* <tr></tr><br/><br/>
                      <tr  >
                          <td></td>
                          <td class="total">Total :</td>
                          <td class="total">Rs. 2250</td>
                          <td></td>
                      </tr> */}
                      </table>
                }
                
                })}
                      <br/><br/><br/><br/><br/>
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