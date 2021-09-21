import React,{useState, useEffect } from 'react';
import '../css/ArtworkDetail.css';
import axios from 'axios';
// import './payment_modal.css'


const PaymentModal = ({ orderId, name, amount }) => {
  let [user, setUser] = useState("");
  let [art, setArt] = useState("");
  let [quantity, setQuantity] = useState("");
  const [orderprice, setOrderPrice] = useState(0);
    const [orderList, setOrderList] = useState([]);
  // console.log(localStorage.getItem("user"));
// console.log(localStorage.getItem("user"));
  // Put the payment variables here

  useEffect(() => {
    setUser(localStorage.getItem("user"));
    axios.get(`http://localhost:5000/orderlist/${user}`)
    .then((response) => {
           console.log(response.data);
           setOrderList(response.data);
           setOrderPrice(response.data.map((ele)=>{return parseFloat(ele.price)}).reduce((a, b) => a + b, 0).toFixed(2).toString());
    });
  });
  
  var payment = {
    sandbox: true, // if the account is sandbox or real
    merchant_id: '1217639', // Replace your Merchant ID
    return_url: 'http://sample.com/return',
    cancel_url: 'http://sample.com/cancel',
    notify_url: 'http://sample.com/notify',
    order_id: orderId,
    items: name,
    amount: amount, 
    currency: 'LKR',
    first_name: 'Saman',
    last_name: 'Perera',
    email: 'samanp@gmail.com',
    phone: '0771234567',
    address: 'No.1, Galle Road',
    city: 'Colombo',
    country: 'Sri Lanka',
    delivery_address: 'No. 46, Galle road, Kalutara South', // optional field
    delivery_city: 'Kalutara', // optional field
    delivery_country: 'Sri Lanka', // optional field
    custom_1: '', // optional field
    custom_2: '', // optional field
  };
    
  // Called when user completed the payment. It can be a successful payment or failure
  window.payhere.onCompleted = function onCompleted(orderId) {
    console.log("Payment completed. OrderID:" + orderId);
    {orderList.map((val) => {
        setArt = val.tool;
        setQuantity = val.quantity;
        setUser(localStorage.getItem("user"));
    axios
      .post("http://localhost:5000/quantityupdate", {
        art : setArt,
        quantity: setQuantity,
      })
      .then(() => {
        alert('');
      });
    axios
      .post("http://localhost:5000/ordercomplete", {
        user : user,

      })
      .then(() => {
        alert('Payment Done');
      });
    })}
    
      
    //Note: validate the payment and show success or failure page to the customer
  };

  // Called when user closes the payment without completing
  window.payhere.onDismissed = function onDismissed() {
    //Note: Prompt user to pay again or show an error page
    console.log("Payment dismissed");
  };

  // Called when error happens when initializing payment such as invalid parameters
  window.payhere.onError = function onError(error) {
    // Note: show an error page
    console.log("Error:"  + error);
  };

  function pay(){
    window.payhere.startPayment(payment);
    
  }

  return <button className="cartbtn" onClick={pay}>Pay with Payhere</button>;
};

export default PaymentModal;
