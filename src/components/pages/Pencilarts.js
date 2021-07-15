import React from 'react';
import '../css/Pencilarts.css';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
export default function Pencilarts (){

  
      return (
         
  

        <div className="A"> 
        <Navbar/>
        <center>
        <h1>De'lart PencilArts</h1></center>
   
       

        
          <div className='C'>
           <center><img className="Photo" src= { require('../../assests/custom.png').default} alt="" width="1300"></img>
           </center>
        
           <center><Link to = '/customizeart'>
                       <button className="button">Customize Pencile arts</button>
                       </Link> </center>
          
          </div>
          
          
  

</div>
      );
  
}