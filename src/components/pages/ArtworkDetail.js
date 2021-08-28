import React, {useState, useEffect }from 'react';
import '../css/ArtworkDetail.css';
import Navbar from '../Navbar';
import axios from "axios";
import QuantityPicker from './QuantityPicker';
import { Link } from 'react-router-dom';


export default function ArtworkDetail() {
  const [click, setClick] = useState(false);
  const [artworkList, setArtworkList] = useState([]);
  const [artworkID, setArtworkID] = useState(window.location.pathname.split("/")[2]);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    setArtworkID(window.location.pathname.split("/")[2]);
  }, [window.location.pathname]);

  useEffect(() => {
    axios.get(`http://localhost:5000/artworkdetail/${artworkID}`)
    .then((response) => {
           console.log(response.data);
           setArtworkList(response.data);
    });
  });
  
  return (
    <div className="A"> 
     <Navbar/>
     <center>
     <nav className='nav'>
       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
       <li className='item'>
           <Link
             to='/artworks'
             className='nav-links'
             onClick={closeMobileMenu}
           >
           All 
           </Link>
         </li>
         <li className='item'>
           <Link
             to='/artworkshistorical'
             className='nav-links'
             onClick={closeMobileMenu}
           >
           Historical
           </Link>
         </li>
         <li className='item'>
           <Link
             to='/artworksdrawing'
             className='nav-links'
             onClick={closeMobileMenu}
           >
           Drawings
           </Link>
         </li>
         <li className='item'>
           <Link
             to='/artworksfineart'
             className='nav-links'
             onClick={closeMobileMenu}
           >
           Fine Arts
           </Link>
         </li>
         <li className='item'>
           <Link
             to='/artworkspainting'
             className='nav-links'
             onClick={closeMobileMenu}
           >
           Paintings
           </Link>
         </li>
       </ul>
     </nav>
 
     </center>
     <div>
     
          {artworkList.map((val) => {
              
              return <div className="imageanddetail">
                  <div class="imagedetailrow">
                  <img className="detailimg" src={'http://localhost:5000/' + val.artwork_image}></img>
                  </div>
                  <div class="imagedetailrow" >
                    <h2 class="proname">{val.artwork_name}</h2>
                    <p class="prodes">{val.artwork_description}</p>
                    <p class="prodim">Artwork Dimensions &nbsp; &nbsp;:&nbsp; &nbsp; </p><br></br>
                    <p class="prodim"> Artist &nbsp; &nbsp;  :   &nbsp; &nbsp; {val.artwork_artist}</p><br></br>
                    <p class="prodim"> Rs. {val.artwork_price}.00</p>
                    <Link 
                         to='/cart'
                         onClick={closeMobileMenu}
                         >
                           <button className="cartbtn">Add To cart</button></Link>
                  </div>
              </div>
          // <div className="A"> 
              
          //     <div className="carddetail">
          //     <img className="detailimg" src={'http://localhost:3001/' + val.artwork_image}></img>
          //     <div className="proname">
          //         <h2> {val.artwork_name} </h2>
          //         <text> {val.artwork_description}
          //         </text>
          //         <text>60 W * 40 H * 1 D in<br/>Artist : Nimal Perera<br/><br/>Rs. 2250<br/></text>
                  
          //         <Link
          //               to='/cart'
          //               onClick={closeMobileMenu}
          //         ><button className="cartbtn">Add To Cart        <i class="fa fa-arrow-right" aria-hidden="true"></i></button> 
          //                         </Link><br/><br/><br/><br/><br/><br/><br/><hr/>
          //     </div>
          //     </div>
          //   </div>
      
       })}
       </div>
<br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br>
<br></br><br></br><br></br><br></br>
<div className="footer">
        <div className="footercard">
          <h1>De'lart</h1>
          <h3>Contact Us</h3>
          <p>Contact Us</p>
          <p>Legal Notices</p>
          <p>General Terms and Conditions</p>
          <p>My Profile</p>
          <p>Help Center</p>
          <p>Call: +119876677</p>
          <p>Emails:delart@gmail.com</p>
          
        </div>
        <div className="footercard">
        <h3>Who are we</h3>
          <p>About Us</p>
          <p>Our Artists</p>
          <p>Exibitions</p>
          <p>Contact</p>
          <p>Our PRoducts</p>
         
         
        
        </div>
        <div className="footercard">
        <h3>Are you an Artist</h3>
          <p>How to join Delart</p>
          <p>Login for Artist</p>
          <p>Art Gallery</p>
          <h3>Are you an Buyer</h3>
          <p>How to join Delart</p>
          <p>Login for Buyer</p>
          <p>Art Gallery</p>
          <p>Artists</p>
         
         
        </div>
        <div className="footercard">
        <h3>Sign Up</h3>
          <p>Artist can usr this system for sell their Artworks.Buyers can purches Artworks.
            First SignUp ! it's Free!
          </p>
          <center><div className="fbutton">SignUp</div></center>
        </div>
        </div>
    </div>
  );
}
