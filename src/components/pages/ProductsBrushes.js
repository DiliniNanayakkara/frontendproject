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



export default function Artworks() {
  const [artworkList, setArtworkList] = useState([]);
  const [click, setClick] = useState(false);
  
  const closeMobileMenu = () => setClick(false);
  useEffect(() => {
    axios.get('http://localhost:3001/brushes').then((response) => {
           setArtworkList(response.data);
    });
}, []);

  return (
     <div className="A"> 
      <Navbar/>
      
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
            Art Boards & Canvas
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
  
  
      <div>
              
              {artworkList.map((val) => {
                    return <div className = "Arts"> 
                          <div className="img"><img src="https://media.istockphoto.com/photos/paint-brushes-picture-id510006691?s=612x612"></img></div> 
                          <div className="name"> {val.tool_name}</div> 
                          <div className="price">Rs. {val.tool_price}.00</div>
                          <button className="but">View Product <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                  </div>;
              })}
              
        </div>
    </div>
  );
}

