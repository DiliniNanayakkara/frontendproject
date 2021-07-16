import React from 'react';
import '../css/Exhibitions.css';
import RegCusNavbar from '../RegCusNavbar';
import { Link } from 'react-router-dom';

export default function Exhibitions (){

  
      return (
  

        <div className="A"> 
       <RegCusNavbar/>
       <center><img className="Photo" src= { require('../../assests/exhi.png').default} alt="" width="1200" height="334"></img>
           </center>
           <center><div className="exhibition" >
                 <center><h2>Exhibition Details</h2></center>
                 <div className="event">
                 <center>
  
  <table className="status">
  <tr>
<th>Artist</th>
<th>Details</th>
<th>Price</th>
<th>Tickets</th>
<th>Status</th>

</tr>
<tr>
<td>Nimaya</td>
<td><h2 className="A1">Happening Now</h2><p>Historical Art Exhibition.Available Arts:2000</p></td>
<td className="B">200LKR</td>
<td>closed</td>
<td><Link to ='/watchexhibition'>
<button className="watch">Watch</button>
</Link></td>


</tr>
<tr>
<td>Dilini</td>
<td><h2 className="A1">Happening Tomarrow</h2><p>Pencile Art Exhibition.Available Arts:100</p></td>
<td className="B">200LKR</td>
<td><button className="buy1">Buy</button></td>
<td><button className="notavailable">Not Available</button></td>


</tr>
<tr>
<td>Amasha</td>
<td><h2 className="A1">Happening 2021/07/20</h2><p>Illustrators Art Exhibition.Available Arts:2000</p></td>
<td className="B">200LKR</td>
<td><button className="buy1">Buy</button></td>
<td><button className="notavailable">Not Available</button></td>


</tr>




  </table>

  </center>
 
                 </div>
                 <center>
                     
                      
                       </center>
                

           </div>
           
           </center>
   
       

        
          
          
  

</div>
      );
  
}
/*
          <div className='C'>
           <center><img className="Photo" src='https://www.contrado.com/blog/wp-content/uploads/2019/12/how-to-organize-an-art-exhibit-886x500.jpg' alt="" width="886" height="500"></img>
           </center>
        

          
          </div>
      */