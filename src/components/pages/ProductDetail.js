import React, {useState, useEffect }from 'react';
import '../css/ArtworkDetail.css';
import RegCusNavbar from '../RegCusNavbar';
import Navbar from '../Navbar';
import axios from "axios";
import QuantityPicker from './QuantityPicker';
import { Link } from 'react-router-dom';


export default function ProductDetail() {
  const [click, setClick] = useState(false);
  const [toolList, setToolList] = useState([]);
  const [toolID, setToolID] = useState(window.location.pathname.split("/")[2]);
  const closeMobileMenu = () => setClick(false);
  let [toolname, setToolName] = useState([]);
  let [price, setPrice] = useState(0);
  let [category, setCategory] = useState([]);
  const [quantity, setToolQuantity] = useState([]);
  let [user, setUser] = useState("");
    const [artworkName, setArtworkName] = useState("");
    const [artworkDescription, setArtworkDescription] = useState("");
    console.log(localStorage.getItem("user"));
  useEffect(() => {
    setToolID(window.location.pathname.split("/")[2]);
  }, [window.location.pathname]);

  useEffect(() => {
    axios.get(`http://localhost:5000/productdetail/${toolID}`)
    .then((response) => {
           console.log(response.data);
           setToolList(response.data);
    });
  });
  const addToCart = () => {
    // setUser(localStorage.getItem("user"));
    setUser = localStorage.getItem("user");
    axios
      .post("http://localhost:5000/addtocart", {
        user : setUser,
        toolname : setToolName,
        toolcategory : setCategory,
        toolprice: setPrice,
        toolquantity: quantity,

      })
      .then(() => {
        alert('Product added to cart');
      });
  };
  if (localStorage.getItem("user") !== null) {
  return (
    <div className="A"> 
      <RegCusNavbar/>
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
              setToolName = val.tool_name ;
              setCategory = val.tool_category;
              setPrice = val.tool_price*quantity;
              return <div className="imageanddetail">
                  <div class="imagedetailrow">
                  <img className="detailimg" src={'http://localhost:5000/' + val.tool_image}></img>
                  </div>
                  <div class="imagedetailrow" >
                    <h2 class="proname">{val.tool_name}</h2>
                    <p class="proquantity"> Available Quantity : {val.tool_quantity}</p><br />
                    <p class="prodimquan"> Quantity &nbsp; : &nbsp; 
                    <input type="number" 
                    id="quantity" 
                    name="quantity" 
                    min="1" 
                    max = {val.tool_quantity}
                    onChange={(event) => {
                      setToolQuantity(event.target.value);
                    }}>
                      </input> </p><br></br>
                      
                    <p class="prodim"> Rs. {val.tool_price}.00</p>
                    <Link 
                         to={`/cart/${setUser}`} 
                         onClick={addToCart}
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
}else{
  return (
    <div className="A"> 
      <Navbar/>
      <Link
              to='/login'
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
              setToolName = val.tool_name ;
              setCategory = val.tool_category;
              setPrice = val.tool_price*quantity;
              return <div className="imageanddetail">
                  <div class="imagedetailrow">
                  <img className="detailimg" src={'http://localhost:5000/' + val.tool_image}></img>
                  </div>
                  <div class="imagedetailrow" >
                    <h2 class="proname">{val.tool_name}</h2>
                    <p class="proquantity"> Available Quantity : {val.tool_quantity}</p><br />
                    <p class="prodimquan"> Quantity &nbsp; : &nbsp; 
                    <input type="number" 
                    id="quantity" 
                    name="quantity" 
                    min="1" 
                    max={val.tool_quantity}
                    onChange={(event) => {
                      setToolQuantity(event.target.value);
                    }}>
                      </input> </p><br></br>
                      
                    <p class="prodim"> Rs. {val.tool_price}.00</p>
                    <Link 
                         to='/login'
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
}
