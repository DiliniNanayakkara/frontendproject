import React, {Component} from 'react';
import CheckoutForm from './CheckoutForm';
import '../css/Checkout.css';
import Navbar from '../Navbar';

export default function Checkout() {
    return (
        <div className="A"> 
         <Navbar/><br/><br/>
    <form method="post" action="https://sandbox.payhere.lk/pay/checkout" >   
    <input type="hidden" name="merchant_id" value="1217639" />  
    <input type="hidden" name="return_url" value="http://sample.com/return" />
    <input type="hidden" name="cancel_url" value="http://sample.com/cancel" />
    <input type="hidden" name="notify_url" value="http://sample.com/notify" />  
    <br /><br />Item Details<br />
    <input type="text" name="order_id" value="ItemNo12345" />
    <input type="text" name="items" value="Door bell wireless" /><br />
    <input type="text" name="currency" value="LKR" />
    <input type="text" name="amount" value="1000" />  
    <br /><br />Customer Details<br />
    <input type="text" name="first_name" value="Saman" />
    <input type="text" name="last_name" value="Perera" /><br />
    <input type="text" name="email" value="samanp@gmail.com" />
    <input type="text" name="phone" value="0771234567" /><br />
    <input type="text" name="address" value="No.1, Galle Road" />
    <input type="text" name="city" value="Colombo" />
    <input type="hidden" name="country" value="Sri Lanka" /><br /><br /> 
    <input type="submit" value="Buy Now" />   
</form> 
        </div>
    )
}