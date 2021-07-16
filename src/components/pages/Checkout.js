import React, {Component} from 'react';
import CheckoutForm from './CheckoutForm';
import '../css/Checkout.css';
import Navbar from '../Navbar';

export default function Checkout() {
    return (
        <div className="A"> 
         <Navbar/><br/><br/>
        <CheckoutForm />
        </div>
    )
}