import React, {useState, useEffect }from 'react';
import '../css/ArtworkDetail.css';
import Navbar from '../Navbar';
import QuantityPicker from './QuantityPicker';
import { Link } from 'react-router-dom';

export default function Artworks() {
  const [click, setClick] = useState(false);
  
  const closeMobileMenu = () => setClick(false);
  return (
     <div className="A"> 
      <Navbar/>
      
      <div className="card">
      <img className="detailimg" src="https://media.istockphoto.com/photos/paint-brushes-picture-id510006691?s=612x612"></img>
      <div className="proname">
          <h2> Art Tool Set </h2>
          <text>Art tool set with wooden box and <br/>drawing kit with crayons and oil pastels<br/><br/>
           </text>
           <text>
           Rs. 2250<br/></text>
           <img className="detailimg2" src="https://media.istockphoto.com/photos/paint-brushes-picture-id510006691?s=612x612"></img>
           <img className="detailimg3" src="https://media.istockphoto.com/photos/paint-brushes-picture-id510006691?s=612x612"></img>
           <img className="detailimg3" src="https://media.istockphoto.com/photos/paint-brushes-picture-id510006691?s=612x612"></img><br/><br/><br/><br/><br/>
           
          <Link
                              to='/cart'
                              onClick={closeMobileMenu}
                          ><button className="cartbtn">Add To Cart        <i class="fa fa-arrow-right" aria-hidden="true"></i></button> 
                          </Link><br/><br/><br/><br/><br/><br/><br/><hr/>
      </div>
      </div>
      
     </div>
     
  );
}

