import React from 'react';
import './HelpCenterHomeInfo.css';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';

export default function HelpCenterHomeInfo() {
  return (
      
    
    
    <div className= "helpcontainer">
      
   
    <div >
    <h1 className="helpwelcom">Welcome to De 'lart help center</h1>
    </div>
       
         
<div className="">
      
      <div> 
    
    <Link to="questionsubmitform">
       <button className="helpbtnsubmit" >How Can we help you</button>
     </Link>
</div>
<div>
    
             
      <Link >
       <button className="helpbtnsubmit">View Q and A</button>
     </Link>
     </div>
    </div>          
    
      <div >
             
      <Link >
       <button className="helpbtnsubmit">FAQs</button>
     </Link>
       
            
             
      
       
           
       
        </div>
    </div>
   
           
     
 
    
 
   
 

      
 
  
  );
}

