import React, {useState, useEffect }from 'react';
import '../css/ArtworkDetail.css';
import Navbar from '../Navbar';
import QuantityPicker from './QuantityPicker';


export default function Artworks() {
    
  return (
     <div className="A"> 
      <Navbar/>
      
      
      <div className="card">
      <img className="detailimg" src="https://www.creativeboom.com/uploads/articles/a4/a40eeac492a143d5bb34412dfe8f275a8834e41c_810.jpg"></img>
      <div className="proname">
          <h2> Summer Breeze </h2>
          <text>In the spirit of Mad Men, an era where modern 
              art<br/> graced the walls of  ad agencies and 
              swanky homes<br/> this monotype set is masculine 
              and undefined abstraction<br/> at it finest.<br/><br/>
           </text>
           <text>60 W * 40 H * 1 D in<br/>Category: Painting<br/></text>
           <img className="detailimg2" src="https://www.creativeboom.com/uploads/articles/a4/a40eeac492a143d5bb34412dfe8f275a8834e41c_810.jpg"></img>
           <img className="detailimg3" src="https://www.creativeboom.com/uploads/articles/a4/a40eeac492a143d5bb34412dfe8f275a8834e41c_810.jpg"></img>
           <img className="detailimg3" src="https://www.creativeboom.com/uploads/articles/a4/a40eeac492a143d5bb34412dfe8f275a8834e41c_810.jpg"></img><br/><br/><br/>
          <div className="quantity">   Quantity :  <QuantityPicker min={0} max={4} /></div>
           <button className="quantity2">Add To Cart</button>
      </div>
      </div>
     </div>
  );
}

