import React, { useState, useEffect } from "react";
import "../css/Orders.css";
import ArtistNavbar from "../ArtistNavbar";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Alert } from "@material-ui/lab";
export default function ArtworkUpload() {
    
    const [file, setfile] = useState(null);
    const [artworkUpload, setArtworkUpload] = useState([]);
    const [artworkName, setArtworkName] = useState("");
    const [artworkDescription, setArtworkDescription] = useState("");
    const [artworkDimension, setArtworkDimension] = useState("");
    const [artworkPrice, setArtworkPrice] = useState(0);
    const [artworkArtist, setArtworkArtist] = useState("");
    const [artistProvince, setArtistProvince] = useState("");
    const [artworkArtistEmail, setArtworkArtistEmail] = useState("");
    const [artworkCategory, setArtworkCategory] = useState("");
    
        
    const onFormSubmit = (e) => {
        const addArtwork = () => {
            axios
              .post("http://localhost:3001/up", {
                artworkUpload: artworkUpload,
                artworkName: artworkName,
                artworkDescription: artworkDescription,
                artworkDimension: artworkDimension,
                artworkPrice: artworkPrice,
                artworkArtist: artworkArtist,
                artworkArtistEmail: artworkArtistEmail,
                artworkCategory: artworkCategory,
    
              })
              .then((response) => {
                alert('Delivery fees set Successfully');
            });
          };
};
    
    return(
        <div className="A">
        <ArtistNavbar />

        <div className="uploadform">
        <form onSubmit={onFormSubmit}>
            
            <div className="uploadforminfo">
            <h1 className="heading">Delivery Charges</h1>
            
            <label> Enter your province : 
            <select
                       className="district"
                       onChange={(event) => {
                        setArtistProvince(event.target.value);
                       }}
                        name="artistprovince"
                       
                      >
                        <option value="">- Choose your district -</option>
                        <option value="Thailand">Ampara</option>
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
                        <option value="Brazil">Vavuniya</option>
                      </select>
            {/* <input
              type="text"
              name="artistProvince"
              onChange={(event) => {
                setArtistProvince(event.target.value);
              }}
            />  */}
            </label> <br></br>
            <label>Delivery charge for Western province : 
            <input
              type="textarea"
              height="100px"
              name="artworkDescription"
              onChange={(event) => {
                setArtworkDescription(event.target.value);
              }}
            /> </label><br></br>
            <label> Delivery charge for Southern province : 
            <input
              type="text"
              name="artworkArtist"
              onChange={(event) => {
                setArtworkArtist(event.target.value);
              }}
            /> </label><br></br>
             <label> Delivery charge for Central province : 
            <input
              type="text"
              name="artworkArtistEmail"
              onChange={(event) => {
                setArtworkArtistEmail(event.target.value);
              }}
            /> </label><br></br>
            <label>Delivery charge for Northern province : 
            <input
              type="text"
              name="artworkPrice"
              onChange={(event) => {
                setArtworkPrice(event.target.value);
              }}
            /> </label><br></br>
            <label>Delivery charge for Eastern province : 
            <input
              type="text"
              name="artworkPrice"
              onChange={(event) => {
                setArtworkPrice(event.target.value);
              }}
            /> </label><br></br>
             <label>Delivery charge for North Central province : 
            <input
              type="text"
              name="artworkPrice"
              onChange={(event) => {
                setArtworkPrice(event.target.value);
              }}
            /> </label><br></br>
             <label>Delivery charge for Uva province : 
            <input
              type="text"
              name="artworkPrice"
              onChange={(event) => {
                setArtworkPrice(event.target.value);
              }}
            /> </label><br></br>
             <label>Delivery charge for Sabaragamuwa province : 
            <input
              type="text"
              name="artworkPrice"
              onChange={(event) => {
                setArtworkPrice(event.target.value);
              }}
            /> </label><br></br>
             <label>Delivery charge for North Western province : 
            <input
              type="text"
              name="artworkPrice"
              onChange={(event) => {
                setArtworkPrice(event.target.value);
              }}
            /> </label><br></br>
            {/* <label>Artwork Category : </label>
            <input
              type="text"
              name="artworkCategory"
              onChange={(event) => {
                setArtworkCategory(event.target.value);
              }}
            /> */}
            
            
            
            {/* <Link
              to='/artworks'
              
            >  */}
            <button className="but"> Confirm Charges </button>
            {/* </Link>      */}
            </div>
            </form>
            </div>
            </div>
        
    );
};