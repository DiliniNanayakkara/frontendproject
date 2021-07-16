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
    axios.get('http://localhost:3001/artist').then((response) => {
           setArtworkList(response.data);
    });
}, []);

  return (
     <div className="A"> 
      <Navbar/>
      <br/>
      <div className = "Arts2"> 
                          
                  <div className="img2"> <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"></img></div> 
                  <div className="name2"> Amal Fernando </div> 
                  <div className="des2"> 4 Artworks </div><br/>
                  
                  <Link
                      to='/artworkdetail'
                      onClick={closeMobileMenu}
                  ><button className="but">More Details         <i class="fa fa-arrow-right" aria-hidden="true"></i></button> 
                  </Link>
          </div>
          <div className = "Arts2"> 
                          
                  <div className="img2"> <img src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"></img></div> 
                  <div className="name2"> Kalana Pradeep </div> 
                  <div className="des2"> 1 Artwork </div><br/>
                  
                  <Link
                      to='/artworkdetail'
                      onClick={closeMobileMenu}
                  ><button className="but">More Details         <i class="fa fa-arrow-right" aria-hidden="true"></i></button> 
                  </Link>
          </div>
          <div className = "Arts2"> 
                          
                  <div className="img2"> <img src="https://i.pinimg.com/originals/c1/93/94/c1939497fd3c6e3cfdead52f79106707.jpg"></img></div> 
                  <div className="name2"> Nishadini Pieris </div> 
                  <div className="des2"> 3 Artworks </div><br/>
                  
                  <Link
                      to='/artworkdetail'
                      onClick={closeMobileMenu}
                  ><button className="but">More Details         <i class="fa fa-arrow-right" aria-hidden="true"></i></button> 
                  </Link>
          </div>
      <div>
              
              {artworkList.map((val) => {
                    return <div className = "Arts2"> 
                          
                          <div className="img2"> <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"></img></div> 
                          <div className="name2"> {val.artist_name}</div> 
                          <div className="des2"> {val.artworks} Artworks </div><br/>
                          
                          <Link
                              to='/artworkdetail'
                              onClick={closeMobileMenu}
                          ><button className="but">More Details         <i class="fa fa-arrow-right" aria-hidden="true"></i></button> 
                          </Link>
                  </div>
                  
              })}
              
        </div>
         
    </div>
  );
}

