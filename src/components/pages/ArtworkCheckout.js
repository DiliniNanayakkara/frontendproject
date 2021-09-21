import React, {Component} from 'react';
import ArtworkCheckoutForm from './ArtworkCheckoutForm';
import '../css/Checkout.css';
import Navbar from '../Navbar';

export default function Checkout() {
    return (
        <div className="A"> 
         <Navbar/><br/><br/>
        <ArtworkCheckoutForm />
        </div>
    )
}