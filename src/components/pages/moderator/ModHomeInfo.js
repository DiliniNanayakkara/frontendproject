import React from 'react';
import './ModHomebtns.css';
import { Link } from 'react-router-dom';

export default function ModHomeInfo() {
  return (
    <center>  
    
    <div className= "container">
      
   
    
      
      <div>

              <Link to='/complaints'>
              <button className='helpcenterbtn'>Manege Art Tools</button>
            </Link>
            
            <Link to='/helpcenter'>
              <button className='helpcenterbtn'>Help Center</button>
            </Link>

    
          
     </div>
            
    
      <div >

           
      <Link to='reports'>
              <button className='helpcenterbtn'>Reports</button>
      </Link>
             
      <Link to='advertiesment' >
       <button className='helpcenterbtn'>Manege Advertiesment</button>
     </Link>
       
            
             
      
    
       
             </div>
     
 
    
 
   
 
 
       </div></center>
 
  
  );
}

