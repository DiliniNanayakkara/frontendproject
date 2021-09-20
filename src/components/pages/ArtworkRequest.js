import '../css/CartTable.css';
import React, {useState, useEffect }from 'react';
import Navbar from '../Navbar';
import CartTable from './CartTable';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ArtworkCart() {
    let [user, setUser] = useState("");
    const [click, setClick] = useState(false);
  const [deliveryList, setDeliveryList] = useState([]);
  const [artworkID, setArtworkID] = useState(window.location.pathname.split("/")[2]);
  const [location, setLocation] = useState(window.location.pathname.split("/")[3]);
  const closeMobileMenu = () => setClick(false);
  let [delivery, setDelivery] = useState("");
  let [artname, setArtName] = useState("");
  let [price, setPrice] = useState("");
  let [artistemail, setArtistEmail] = useState("");
  
  useEffect(() => {
    setArtworkID(window.location.pathname.split("/")[2]);
  }, [window.location.pathname]);

 
  useEffect(() => {
    setLocation(window.location.pathname.split("/")[3]);
  }, [window.location.pathname]);

  useEffect(() => {
    axios.get(`http://localhost:5000/delivery/${artworkID}`)
    .then((response) => {
           console.log(response.data);
           setDeliveryList(response.data);
    });
  });
  console.log(localStorage.getItem("user"));

  const requestArtwork = () => {
    setUser = localStorage.getItem("user");
    axios
      .post("http://localhost:5000/request", {
        user: setUser,
        artname: setArtName,
        delivery: setDelivery,
        price: setPrice,
        artistemail: setArtistEmail,
        
      })
      .then(() => {
        console.log("success");
      });
    }

  return (
     <div className="A"> 
      <Navbar/><br/><br/>
      <text className="carthead">Request artworks</text>
      <table className="carttable">
                  <thead>
                      <tr className="carttable1">
                          <th className="th1">Artwork Name</th>
                          <th className="th2">Artist</th>
                          <th className="th6">Unit Price</th>
                          <th className="th5">Delivery Location</th>
                          <th className="th3">Estimated Delivery Charge</th>
                         
                      </tr>
                      </thead>
              </table>
      {deliveryList.map((val) => {
        //   setUser(localStorage.getItem("user"));
                for(var i=0; i<deliveryList.length; i++){
                    if(location == "Ampara"){
                        
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                    return <table className="carttable">
                      <tr >
                          <td className="td1">{val.artwork_name}</td>
                          <td className="td2">{val.artwork_artist}</td>
                          <td className="td6">Rs. {val.artwork_price}.00</td>
                          <td className="td5">{location}</td>
                          
                          <td className="td3">Rs. {val.perkm * val.Ampara}.00</td>
                         
                      </tr>
                      </table>
                    } else if(location=="Colombo"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Colombo}.00</td>
                            
                        </tr>
                        </table>
                    }else if(location=="Gampaha"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Gampaha}.00</td>
                            
                        </tr>
                        </table>
                    }else if(location=="Kalutara"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Kalutara}.00</td>
                           
                        </tr>
                        </table>
                    }else if(location=="Kandy"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Kandy}.00</td>
                           
                        </tr>
                        </table>
                    }else if(location=="Matale"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Matale}.00</td>
                            
                        </tr>
                        </table>
                    }else if(location=="NuwaraEliya"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.NuwaraEliya}.00</td>
                           
                        </tr>
                        </table>
                    }else if(location=="Galle"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Galle}.00</td>
                            
                        </tr>
                        </table>
                    }else if(location=="Hambantota"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Hambantota}.00</td>
                            
                        </tr>
                        </table>
                    }else if(location=="Matara"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Matara}.00</td>
                           
                        </tr>
                        </table>
                    }else if(location=="Badulla"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Badulla}.00</td>
                            
                        </tr>
                        </table>
                    }else if(location=="Moneragala"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Moneragala}.00</td>
                            
                        </tr>
                        </table>
                    }else if(location=="Kegalle"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Kegalle}.00</td>
                           
                        </tr>
                        </table>
                    }else if(location=="Rathnapura"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Rathnapura}.00</td>
                            
                        </tr>
                        </table>
                    }else if(location=="Kurunegala"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Kurunegala}.00</td>
                           
                        </tr>
                        </table>
                    }else if(location=="Puttalam"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Puttalam}.00</td>
                           
                        </tr>
                        </table>
                    }else if(location=="Anuradhapura"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Anuradhapura}.00</td>
                            
                        </tr>
                        </table>
                    }else if(location=="Polonnaruwa"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Polonnaruwa}.00</td>
                            
                        </tr>
                        </table>
                    }else if(location=="Jaffna"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Jaffna}.00</td>
                           
                        </tr>
                        </table>
                    }else if(location=="Kilinochchi"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Kilinochchi}.00</td>
                           
                        </tr>
                        </table>
                    }else if(location=="Mannar"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Mannar}.00</td>
                           
                        </tr>
                        </table>
                    }else if(location=="Mullaitivu"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Mullaitivu}.00</td>
                            
                        </tr>
                        </table>
                    }else if(location=="Vavuniya"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Vavuniya}.00</td>
                           
                        </tr>
                        </table>
                    }else if(location=="Batticaloa"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Batticaloa}.00</td>
                            
                        </tr>
                        </table>
                    }else if(location=="Trincomalee"){
                        setDelivery = location;
                        setArtName = val.artwork_name;
                        setPrice = val.artwork_price;
                        setArtistEmail = val.artist_email;
                        return <table className="carttable">
                        <tr >
                            <td className="td1">{val.artwork_name}</td>
                            <td className="td2">{val.artwork_artist}</td>
                            <td className="td6">Rs. {val.artwork_price}.00</td>
                            <td className="td5">{location}</td>
                            
                            <td className="td3">Rs. {val.perkm * val.Trincomalee}.00</td>
                            
                        </tr>
                        </table>
                    }
                }
                
                })}
                      <br/><br/><br/><br/><br/>
                      <Link
                              to='/artworks'
                              onClick={closeMobileMenu}
                          ><button className="continue"><i class="fa fa-arrow-left" aria-hidden="true"></i>   Continue Shopping       
                          </button> 
                          </Link>
                          <Link
                              to='/checkout'
                              onClick={requestArtwork}
                          ><button className="checkout"> <i class="fa fa-shopping-cart" aria-hidden="true"></i>               Request        
                          </button> 
                          </Link>
      
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
