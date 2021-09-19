import React, {useState, useEffect }from 'react';
import '../css/Artworks.css';
import ArtistNavbar from '../ArtistNavbar';
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



export default function Artistartworks() {
    const [click, setClick] = useState(false);
    const [artworkList, setArtworkList] = useState([]);
    const [location, setLocation] = useState("");
    const [artworkID, setArtworkID] = useState(window.location.pathname.split("/")[2]);
    const closeMobileMenu = () => setClick(false);
  
  
  useEffect(() => {
    axios.get('http://localhost:5000/artworks').then((response) => {
      console.log(response.data);
           setArtworkList(response.data);
    });
}, []);
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
      <ArtistNavbar/>
      <br></br> <br></br> <br></br> <br></br> 
      <Link
              to='/artworkcart'
              onClick={closeMobileMenu}
            >
      <button class="cartbutton"><i class="fa fa-shopping-cart"></i> &nbsp; Artworks Cart </button>
     </Link>
      <center>
      <nav className='nav'>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='item'>
            <Link
              to='/artistartworks'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            All
            </Link>
          </li>
          <li className='item'>
            <Link
              to='/artistartworks'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            Historical
            </Link>
          </li>
          <li className='item'>
            <Link
              to='/artistartworks'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            Drawings
            </Link>
          </li>
          <li className='item'>
            <Link
              to='/artistartworks'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            Fine Arts
            </Link>
          </li>
          <li className='item'>
            <Link
              to='/artistartworks'
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
                      <p class="prodim">Artwork Dimensions (Width*Height)&nbsp; &nbsp;:&nbsp; &nbsp; {val.artwork_dimension} cm</p><br></br>
                      <p class="prodim"> Artist &nbsp; &nbsp;  :   &nbsp; &nbsp; {val.artwork_artist}</p><br></br>
                      <p class="prodim"> Rs. {val.artwork_price}.00</p>
                      <p class="prodim"> Delivery location (District) : 
                      <select
                         className="district"
                         onChange={(event) => {
                          setLocation(event.target.value);
                         }}
                          name="location"
                         
                        >
                          <option value="">- Choose your delivery district -</option>
                          <option value="Ampara">Ampara</option>
                          <option value="Anuradhapura">Anuradhapura</option>
                          <option value="Badulla">Badulla</option>
                          <option value="Batticaloa">Batticaloa</option>
                          <option value="Colombo">Colombo</option>
                          <option value="Galle">Galle</option>
                          <option value="Gampaha">Gampaha</option>
                          <option value="Hambantota">Hambanthota</option>
                          <option value="Jaffna">Jaffna</option>
                          <option value="Kalutara">Kalutara</option>
                          <option value="Kandy">kandy</option>
                          <option value="Kegalle">kegalle</option>
                          <option value="Kilinochchi">Kilinochchi</option>
                          <option value="Kurunegala">Kurunegala</option>
                          <option value="Mannar">Mannar</option>
                          <option value="Matale">Matale</option>
                          <option value="Matara">Matara</option>
                          <option value="Moneragala">Moneragala</option>
                          <option value="Mullaitivu">Mullaitivu</option>
                          <option value="NuwaraEliya">Nuwara Eliya</option>
                          <option value="Polonnaruwa">Polonnaruwa</option>
                          <option value="Puttalam">Puttalam</option>
                          <option value="Rathnapura">Ratnapura</option>
                          <option value="Trincomalee">Trincomalee</option>
                          <option value="Vavuniya">Vavuniya</option>
                          {/* <option value="Western">Western</option>
                          <option value="Central">Central</option>
                          <option value="Southern">Southern</option>
                          <option value="Uva">Uva</option>
                          <option value="Sabaragamuwa">Sabaragamuwa</option>
                          <option value="North Western">North Western</option>
                          <option value="North Central">North Central</option>
                          <option value="Nothern">Nothern</option>
                          <option value="Eastern">Eastern</option> */}
                          {/* <option value="Thailand">Ampara</option>
                          <option value="Japan">Anuradhapura</option>
                          <option value="Brazil">Badulla</option>
                          <option value="Brazil">Batticaloa</option>
                          <option value="Brazil">Colombo</option>
                          <option value="Brazil">Galle</option>
                          <option value="Brazil">Gampaha</option>
                          <option value="Brazil">Hambanthota</option>
                          <option value="Brazil">Jaffna</option>
                          <option value="Brazil">Kalutara</option>
                          <option value="Brazil">kandy</option>
                          <option value="Brazil">kegalle</option>
                          <option value="Brazil">Kilinochchi</option>
                          <option value="Brazil">Kurunegala</option>
                          <option value="Brazil">Mannar</option>
                          <option value="Brazil">Matale</option>
                          <option value="Brazil">Matara</option>
                          <option value="Brazil">Moneragala</option>
                          <option value="Brazil">Mullaitivu</option>
                          <option value="Brazil">Nuwara Eliya</option>
                          <option value="Brazil">Polonnaruwa</option>
                          <option value="Brazil">Puttalam</option>
                          <option value="Brazil">Ratnapura</option>
                          <option value="Brazil">Trincomalee</option>
                          <option value="Brazil">Vavuniya</option> */}
                        </select>
              {/* <input
                type="text"
                name="location"
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
              />  */}
              </p><br></br>
                      <Link 
                           to={`/artistartworkrequest/${val.artwork_id}/${location}`} 
                           onClick={closeMobileMenu}
                           >
                             <button className="cartbtn">Continue</button></Link>
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
            //         ><button > Continue       <i class="fa fa-arrow-right" aria-hidden="true"></i></button> 
            //                         </Link><br/><br/><br/><br/><br/><br/><br/><hr/>
            //     </div>
            //     </div>
            //   </div>
        
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