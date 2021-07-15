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
  const [drawingsList, setDrawingsList] = useState([]);
  const [click, setClick] = useState(false);
  
  const closeMobileMenu = () => setClick(false);
  useEffect(() => {
    axios.get('http://localhost:3001/fineart').then((response) => {
           setDrawingsList(response.data);
    });
}, []);

  return (
     <div className="A"> 
      <Navbar/>
      
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
  
  
      <div>
              
              {drawingsList.map((val) => {
                    return <div className = "Arts"> 
                          <div className="img"> <img src="https://www.creativeboom.com/uploads/articles/a4/a40eeac492a143d5bb34412dfe8f275a8834e41c_810.jpg"></img></div> 
                          <div className="name"> {val.artwork_name}</div> 
                          <div className="des"> {val.artwork_category} , {val.artwork_description}</div>
                          <div className="price">Rs. {val.artwork_price}.00</div>
                          <button className="but">View Artwork <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                  </div>;
              })}
              
        </div>
    </div>
  );
}

