import '../css/CartTable.css';
import React, {useState, useEffect }from 'react';
import Navbar from '../Navbar';
import RegCusNavbar from '../RegCusNavbar';
import CartTable from './CartTable';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ArtworkCart() {
  let [user, setUser] = useState("");
    const [click, setClick] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [toolID, setToolID] = useState(window.location.pathname.split("/")[2]);
  const closeMobileMenu = () => setClick(false);
  console.log(localStorage.getItem("user"));
  let [cartid, setCartId] = useState("");
 
  let [carttool, setCartTool] = useState([]);
  let [cartprice, setCartPrice] = useState(0);
  let [cartquantity, setCartQuantity] = useState([]);

  useEffect(() => {
    setToolID(window.location.pathname.split("/")[2]);
  }, [window.location.pathname]);

  

  useEffect(() => {
    setUser(localStorage.getItem("user"));
    axios.get(`http://localhost:5000/confirmed/${user}`)
    .then((response) => {
           console.log(response.data);
           setOrderList(response.data);
    });
  });

  const removeItem = () => {
    axios
      .post("http://localhost:5000/cartremove", {
          cartid : setCartId,
      })
      .then(() => {
        console.log("success");
      });
    }
    
  return (
     <div className="A"> 
      <RegCusNavbar/><br/><br/>
      <text className="carthead">Artworks Cart</text>
      <table className="carttable">
                  <thead>
                      <tr className="carttable1">
                          <th className="th1">Artwork Name</th>
                          <th className="th2">Delivery Location</th>
                          <th className="th6">Unit Price</th>
                          <th className="th3">Sub Total</th>
                          <th>Actions</th>
                      </tr>
                      </thead>
              </table>
      {orderList.map((val) => {
                for(var i=0; i<orderList.length; i++){
                  return <table className="carttable">
                      <tr >
                          <td className="td1">{val.artname}</td>
                          <td className="td2">{val.location}</td>
                          <td className="td6">Rs. {val.price}.00</td>
                         
                          <td className="td3">Rs. {val.price}.00</td>
                          <td className="td4"><button onClick={removeItem}><i  class="far fa-trash-alt ml-auto" aria-hidden="true" ></i></button></td>
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
                              to='/artworkcheckout'
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