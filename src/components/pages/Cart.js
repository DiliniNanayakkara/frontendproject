import "../css/CartTable.css";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import RegCusNavbar from '../RegCusNavbar';
import CartTable from "./CartTable";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Cart() {
  const [click, setClick] = useState(false);
  const [toolList, setToolList] = useState([]);
  const [total,setCartTotal]=useState("")
  const [toolID, setToolID] = useState(window.location.pathname.split("/")[2]);
  const closeMobileMenu = () => setClick(false);
  let [cartid, setCartId] = useState("");
  let [user, setUser] = useState("");
  let [carttool, setCartTool] = useState([]);
  let [cartprice, setCartPrice] = useState(0);
  let [cartquantity, setCartQuantity] = useState([]);
  console.log(localStorage.getItem("user"));
  // 
  useEffect(() => {
    setToolID(window.location.pathname.split("/")[2]);
  }, [window.location.pathname]);
  
  useEffect(() => {
    setUser(localStorage.getItem("user"));
    axios.get(`http://localhost:5000/cart/${user}`)
    .then((response) => {
           console.log(response.data);
           setToolList(response.data);
           setCartTotal(response.data.map((ele)=>{return parseFloat(ele.cart_price)}).reduce((a, b) => a + b, 0).toFixed(2).toString());
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
    const setOrder = () => {
      // setUser(localStorage.getItem("user"));
      setUser = localStorage.getItem("user");
      axios
        .post("http://localhost:5000/addtoorder", {
          user : setUser,
          carttool : setCartTool,
          cartprice: setCartPrice,
          cartquantity: setCartQuantity,
  
        })
        .then(() => {
          console.log("success");
        });
        setUser = localStorage.getItem("user");
        axios
        .post(`http://localhost:5000/removefromcart/${user}`) 
        .then(() => {
          console.log("success");
        });
    };

  if (localStorage.getItem("user") !== null) {
  return (
    <div className="A">
      <RegCusNavbar />
      <br />
      <br />
      <text className="carthead">Your Cart</text>
      <table className="carttable">
                  <thead>
                      <tr className="carttable1">
                          <th className="th1">Product Name</th>
                          <th className="th2">Category</th>
                          <th className="th6">Unit Price</th>
                          <th className="th5">Quantity</th>
                          <th className="th3">Sub Total</th>
                          <th>Actions</th>
                      </tr>
                      </thead>
              </table>
      {toolList.map((val) => {
        
                setCartId = val.cart_id;
                setCartTool = val.cart_tool;
                setCartPrice = val.cart_price;
                setCartQuantity = val.cart_quantity;
                
                for(var i=0; i<toolList.length; i++){
                  
                  return <table className="carttable">
                    
                      <tr >
                          <td className="td1">{val.cart_tool}</td>
                          <td className="td2">{val.cart_category}</td>
                          <td className="td6">Rs. {val.cart_price / val.cart_quantity}.00</td>
                          <td className="td5">{val.cart_quantity}</td>
                          <td className="td3">Rs. {val.cart_price}.00</td>
                          <td className="td4"><button onClick={removeItem}><i  class="far fa-trash-alt ml-auto" aria-hidden="true" ></i></button></td>
                      </tr>
                     
                      
                      </table>
                     
                }
                
                })}
                <table className="carttable">
                <tr >
                <td className="td1"></td>
                <td className="td2"></td>
                <td className="td6"></td>
                <td className="td5">Total</td>
                <td className="td3">Rs.{total}</td>
                <td className="td4"></td>
            </tr>
            </table>
      <br />
      <br />
      <Link to="/products" onClick={closeMobileMenu}>
        <button className="continue">
          <i class="fa fa-arrow-left" aria-hidden="true"></i> Continue Shopping
        </button>
      </Link>
      <Link to={`/checkout/${total}`} 
      onClick={closeMobileMenu}>
        <button className="checkout">
          {" "}
          <i class="fa fa-shopping-cart" aria-hidden="true"></i> Checkout
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
          <p>
            Artist can usr this system for sell their Artworks.Buyers can
            purches Artworks. First SignUp ! it's Free!
          </p>
          <center>
            <div className="fbutton">SignUp</div>
          </center>
        </div>
      </div>
    </div>
  );
}else{
  return (
    <div className="A">
      <Navbar />
      <br />
      <br />
      <text className="carthead">Your Cart</text>
      <table className="carttable">
                  <thead>
                      <tr className="carttable1">
                          <th className="th1">Product Name</th>
                          <th className="th2">Category</th>
                          <th className="th6">Unit Price</th>
                          <th className="th5">Quantity</th>
                          <th className="th3">Sub Total</th>
                          <th>Actions</th>
                      </tr>
                      </thead>
              </table>
      {toolList.map((val) => {
        
                setCartId = val.cart_id;
                setCartTool = val.cart_tool;
                setCartPrice = val.cart_price;
                setCartQuantity = val.cart_quantity;
                
                for(var i=0; i<toolList.length; i++){
                  
                  return <table className="carttable">
                    
                      <tr >
                          <td className="td1">{val.cart_tool}</td>
                          <td className="td2">{val.cart_category}</td>
                          <td className="td6">Rs. {val.cart_price / val.cart_quantity}.00</td>
                          <td className="td5">{val.cart_quantity}</td>
                          <td className="td3">Rs. {val.cart_price}.00</td>
                          <td className="td4"><button onClick={removeItem}><i  class="far fa-trash-alt ml-auto" aria-hidden="true" ></i></button></td>
                      </tr>
                     
                      
                      </table>
                     
                }
                
                })}
                <table className="carttable">
                <tr >
                <td className="td1"></td>
                <td className="td2"></td>
                <td className="td6"></td>
                <td className="td5">Total</td>
                <td className="td3">Rs.{total}</td>
                <td className="td4"></td>
            </tr>
            </table>
      <br />
      <br />
      <Link to="/products" onClick={closeMobileMenu}>
        <button className="continue">
          <i class="fa fa-arrow-left" aria-hidden="true"></i> Continue Shopping
        </button>
      </Link>
      <Link to={`/checkout/${total}`} 
      onClick={setOrder}>
        <button className="checkout">
          {" "}
          <i class="fa fa-shopping-cart" aria-hidden="true"></i> Checkout
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
          <p>
            Artist can usr this system for sell their Artworks.Buyers can
            purches Artworks. First SignUp ! it's Free!
          </p>
          <center>
            <div className="fbutton">SignUp</div>
          </center>
        </div>
      </div>
    </div>
  );
}
}
