import React, {useState, useEffect }from 'react';
import '../css/Artworks.css';
import Navbar from '../Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default function ProductsEasels() {
  const [toolList, setToolList] = useState([]);
  const [click, setClick] = useState(false);
  
  const closeMobileMenu = () => setClick(false);
  useEffect(() => {
    axios.get('http://localhost:5000/easels').then((response) => {
           console.log(response.data);
           setToolList(response.data);
    });
  }, []);

  return (
     <div className="A"> 
      <Navbar/>
      <Link
              to='/cart'
              onClick={closeMobileMenu}
            >
      <button class="cartbutton"><i class="fa fa-shopping-cart"></i> &nbsp; Products Cart </button>
     </Link>
      <center>
      <nav className='nav'>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            All 
            </Link>
          </li>
          <li className='item'>
            <Link
              to='/productsbrushes'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            Brushes
            </Link>
          </li>
          <li className='item'>
            <Link
              to='/productscanvas'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            Boards/Canvas
            </Link>
          </li>
          <li className='item'>
            <Link
              to='/productssupplies'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            Painting Supplies
            </Link>
          </li>
          <li className='item'>
            <Link
              to='/productseasels'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            Easels
            </Link>
          </li>
        </ul>
      </nav>
  
      </center>
      <div>
              
              {toolList.map((val) => {
                
                    return <div className = "cards"> 
                    
                          <div className="image">
                            <img src={'http://localhost:5000/' + val.tool_image}></img>
                          </div>
                          
                          <div className="cardbody">
                          <div className="name"> {val.tool_name}</div> 
                          <div className="categ"> ({val.tool_category}) </div>
            
                          <div className="price">Rs. {val.tool_price}.00</div>
                          
                          <Link
              to={`/productdetail/${val.tool_id}`} 
              onClick={closeMobileMenu}
            ><button >
            View Product  
            </button> </Link>
                          {/* <button>View Artwork</button> */}
                          </div>
                          
                          {/* <div className="img"> <img align="center" src={'http://localhost:3001/' + val.image} alt=""></img></div> 
                          <div className="name"> {val.name}</div> 
                          <div className="des"> {val.category} , {val.artist}</div>
                          <div className="price">Rs. {val.artwork_price}.00</div> */}
                          {/* <Link
              to='/artworkdetail'
              onClick={closeMobileMenu}
            ><button className="but">
            View Artwork         <i class="fa fa-arrow-right" aria-hidden="true"></i></button> </Link> */}
                  </div>
              })}
              
        </div>
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

