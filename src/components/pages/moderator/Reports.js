import React from 'react';
import {Link} from 'react-router-dom';
import NewUsersChart from './NewUsersChart';



import ModeratorNavbar from './ModeratorNavbar';




export default function Dashbord (){

  
      return (
            <div className="home">
            <ModeratorNavbar />
            <div>
      
      <div className="itemcontainer">
    
    <Link to='/newuserchart'>
       <button className='helpcenterbtn'>Newly registered users</button>
     </Link>

    
             
      <Link to='reports'>
       <button className='helpcenterbtn'>Products</button>
     </Link>
     </div>
    </div>
             
  
 

   
      <div className="itemcontainer">
             
      <Link to='advertiesment' >
       <button className='helpcenterbtn'>Return</button>
     </Link>
       
            
             
      
     <Link to='/complaints'>
       <button className='helpcenterbtn'>Complaints Handle</button>
     </Link>
       
             </div>
     
 
    
           
           
           
          </div>

  
      );
      
  
}