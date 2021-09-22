import '../css/DeliveryDetails.css';
import RegCusNavbar from '../RegCusNavbar';
import PaymentModal from "./PaymentModal";
import React, {useState, useEffect }from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function DeliveryDetails() {
  const [click, setClick] = useState(false);
    const [total, setTotal] = useState(window.location.pathname.split("/")[2]);
    let [user, setUser] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [customerList, setCustomerList] = useState([]);
    const closeMobileMenu = () => setClick(false);
    console.log(localStorage.getItem("user"));
    useEffect(() => {
        setTotal(window.location.pathname.split("/")[2]);
      }, [window.location.pathname]);
    
      useEffect(() => {
        setUser(localStorage.getItem("user"));
        axios.get(`http://localhost:5000/details/${user}`)
        .then((response) => {
               console.log(response.data);
               setCustomerList(response.data);
               
        });
      });
     
      const onFormSubmit = (e) => {
        e.preventDefault();
        setUser = localStorage.getItem("user");

   
    axios.
    post("http://localhost:5000/setDelivery",{
      user : setUser,
            total: total,
            firstname : firstname,
            lastname : lastname,
            address : address,
            phone : phone,
            email : email,
            city : city,
            date : date,
    })
    .then((response) => {
        alert('Delivery Details Set Successfully');
    })
    .catch((err) => {
        console.log('err', err);
    });
};

      // {customerList.map((val) => {
      //   setFirstName = val.first_name;
      //   console.log(val.first_name);
      // })}
      // {customerList.map((val) => {
    return <div className="A"> 
         <RegCusNavbar/><br/><br/>
<form className="delivery-details" onSubmit={onFormSubmit} >

    
    <div class="delivery-header">
    <h1>Delivery Details</h1>
    </div>

    
    {/* {customerList.map((val) => { */}
    <div class="delivery-body">
    <div class="horizontal-group">
   
        <div class="delivery-group left">
        
            <label for="firstname" class="delivery-title">First name *
            <input type="text"   name="firstname" class="delivery-input" 
            onChange={(event) => {
              setFirstName(event.target.value);
            }}placeholder="enter your first name" required="required" /></label>
         
        </div>
        <div class="delivery-group right">
            <label for="lastname" class="delivery-title">Last name</label>
            <input type="text" name="lastname" class="delivery-input" 
            onChange={(event) => {
              setLastName(event.target.value);
            }} placeholder="enter your last name" />
        </div>
    </div>
    <div class="delivery-group">
  <label for="email" class="delivery-title">Delivery Address*</label>
  <input type="text" name="address" class="delivery-input" 
  onChange={(event) => {
    setAddress(event.target.value);
  }} placeholder="enter your address" required="required" />
</div>

<div class="horizontal-group">

  <div class="delivery-group left">
    <label for="password" class="delivery-title">Delivery City *</label>
    <input type="text" name="city" class="delivery-input2" 
     onChange={(event) => {
      setCity(event.target.value);
    }} placeholder="enter your city" required="required" />
  </div><br /><br /><br /><br /><br />

</div>
<div class="horizontal-group">

  <div class="delivery-group left">
    <label for="password" class="delivery-title">Phone Number *</label>
    <input type="number" name="phone" class="delivery-input2" 
   onChange={(event) => {
    setPhone(event.target.value);
  }} placeholder="enter your phone number" required="required" />
  </div><br /><br /><br /><br /><br />
  <div class="horizontal-group">

<div class="delivery-group left">
  <label for="password" class="delivery-title">Email Address *</label>
  <input type="email" name="email" class="delivery-input2" 
  onChange={(event) => {
    setEmail(event.target.value);
  }} placeholder="enter your email address" required="required" />
</div><br /><br /><br /><br /><br />
</div>

<div class="horizontal-group">

<div class="delivery-group left">
  <label for="password" class="delivery-title">Delivery Date *</label>
  <input type="date" name="date" name="trip-start" class="delivery-input2" 
   onChange={(event) => {
    setDate(event.target.value);
  }}
       min="2021-01-01" max="2021-12-31" required="required" />
</div>
</div>
</div>
    
    </div>
    {/* })} */}
   
    <div class="delivery-footer">
    <span>* required</span>
  <button type="submit" 
   class="submitbutton">Submit Details</button>
    
    </div>
</form>
<PaymentModal
      
      // Use a unique value for the orderId
      orderId={45896588}
      name="Artwork Tools"
      amount={total}
        />

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
    
// })}
}