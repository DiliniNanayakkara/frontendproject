import React ,{useState, useEffect }from "react";
import '../css/Checkout.css';
import { Link } from 'react-router-dom';
import RegCusNavbar from '../RegCusNavbar';
import '../css/CartTable.css';
import axios from 'axios';
import PaymentModal from "./PaymentModal";


function CheckoutComponent() {
  let orders = [];
    const [click, setClick] = useState(false);
    const [orderprice, setOrderPrice] = useState(0);
    const [orderList, setOrderList] = useState([]);

    let [orderItem, setOrderItem] = useState("");
    let [orderPrice, setPrice] = useState("");
    const closeMobileMenu = () => setClick(false);
    let [user, setUser] = useState("");
    // console.log(localStorage.getItem("user"));
    useEffect(() => {
      setOrderPrice(window.location.pathname.split("/")[2]);
    }, [window.location.pathname]);

    useEffect(() => {
      setUser(window.location.pathname.split("/")[3]);
    }, [window.location.pathname]);
    
    useEffect(() => {
      setUser(localStorage.getItem("user"));
      axios.get(`http://localhost:5000/order/${user}`)
      .then((response) => {
             console.log(response.data);
             setOrderList(response.data);
             setOrderPrice(response.data.map((ele)=>{return parseFloat(ele.cart_price)}).reduce((a, b) => a + b, 0).toFixed(2).toString());
      });
    });
    
      const setOrder = () => {
        // setUser(localStorage.getItem("user"));
        setUser = localStorage.getItem("user");
        axios
          .post("http://localhost:5000/setorder", {
            user : setUser,
            orderItem : setOrderItem,
            orderPrice: setPrice,
    
          })
          .then(() => {
            console.log("success");
          });
      };
    
    

  return (
    <main>
      <div className="App">
      
    </div>
      <text className="carthead">Delivery Details</text>
      <table className="carttable">
             <tr>Your Order Details</tr>
             
             </table>
      {orderList.map((val) => {
          // for(var i=0; i< orderList.length; i++){
          orders.push(val.cart_tool);
        //  console.log(orders[1]);
          return <table className="carttable">
              
              <tr >
                  <td className="td1">Product : {val.cart_tool}</td>
                  <td className="td5">Quantity : {val.cart_quantity}</td>
                  <td className="td3">Price : Rs. {val.cart_price}.00</td>
                  
              </tr>
             
              
              </table>
          
        
      })}
      <table className="carttable">
                <tr >
               
                <td className="td1"></td>
                <td className="td5">Total</td>
                <td className="td3">Rs.{orderprice}</td>
                
            </tr>
            </table>
      {/* <text className="del">Delivery Information :</text>
      <div className="pencil">
            <img className="pencile" src= { require('../../assests/artworks.png').default} alt="" width="300" height="300"></img>
        
            </div> */}
      {/* <div className="inputForm">
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
       
      </form>
      
      
      
      </div> */}
     
      <Link 
                                 to={`/deliverydetails/${orderprice}`} 
                                onClick={setOrder}
                                >
                                  <button className="cartbtn">Proceed To Payment</button></Link>
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