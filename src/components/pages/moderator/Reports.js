import React from 'react';
import {Link} from 'react-router-dom';
import NewUsersChart from './NewUsersChart';
import './ReportHomePage.css';



import ModeratorNavbar from './ModeratorNavbar';




export default function Dashbord (){

  
      return (
        <div>
            <ModeratorNavbar />
     
      
      <div className="itemcontainer">
    
     <Link to='/newuserchart'>
       <button className='reportitembtn'>Newly registered users</button>
     </Link>
              
      <Link to='productchart'>
       <button className='reportitembtn'>Products</button>
     </Link>
    
      <Link to='/soldartworksreport' >
       <button className='reportitembtn'>Sold ArtWorks</button>
     </Link> 
          
     <Link to='/newuserchart'>
       <button className='reportitembtn'>Recived Artworks</button>
     </Link>  
     <Link to='/productchart'>
       <button className='reportitembtn'>Return</button>
     </Link>      
    
  </div>
</div>

  
      );
      
  
}