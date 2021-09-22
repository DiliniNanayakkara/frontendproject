import React, {Component} from 'react';
import CheckoutForm from './CheckoutForm';
import '../css/Checkout.css';
import Navbar from '../Navbar';
import RegCusNavbar from '../RegCusNavbar';

export default function Checkout() {
    console.log(localStorage.getItem("user"));
    return (
        <div className="A"> 
         <RegCusNavbar/><br/><br/>
        <CheckoutForm />
        </div>
    )
}