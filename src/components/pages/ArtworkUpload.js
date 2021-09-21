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
    const [artworkPrice, setArtworkPrice] = useState(0);
    const [artworkArtist, setArtworkArtist] = useState("");
    const [artworkCategory, setArtworkCategory] = useState("");
    const [artistdistrict, setArtistDistrict] = useState("");
    const [artworkDimension, setArtworkDimension] = useState("");
    const [perkmcharge, setPerKmCharge] = useState(0);
    const [artworkArtistEmail, setArtworkArtistEmail] = useState("");
    
    const addArtwork = () => {
        axios
          .post("http://localhost:5000/up", {
            artworkUpload: artworkUpload,
            artworkName: artworkName,
            artworkDescription: artworkDescription,
            artworkPrice: artworkPrice,
            artworkArtist: artworkArtist,
            artworkCategory: artworkCategory,
            artworkDimension: artworkDimension,
            artistdistrict: artistdistrict,
            artworkArtistEmail: artworkArtistEmail,

          })
          .then(() => {
            console.log("success");
          });
      };
    const onFormSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('photo', file);
        formData.append('artworkName', artworkName);
        formData.append('artworkDescription', artworkDescription);
        formData.append('artworkPrice', artworkPrice);
        formData.append('artworkArtist', artworkArtist);
        formData.append('artworkCategory', artworkCategory);
        formData.append('artworkDimension', artworkDimension);
        formData.append('artistdistrict', artistdistrict);
        formData.append('perkmcharge', perkmcharge);
        formData.append('artworkArtistEmail', artworkArtistEmail);
       
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
   
    axios.
    post("http://localhost:5000/upload", formData, config)
    .then((response) => {
        alert('Artwork Uploaded Successfully');
    })
    .catch((err) => {
        console.log('err', err);
    });
};
    const onInputChange = (e) => {
        setfile(e.target.files[0]);
        setArtworkUpload(e.target.value);
    }
    let date = new Date();
    console.log(date);
    return(
        <div className="A">
        <ArtistNavbar />

        <div className="uploadform">
        <form onSubmit={onFormSubmit}>
            
            <div className="uploadforminfo">
            <h1 className="heading">Artwork Upload</h1>
            <label>Upload Artwork :                       
            <input type='file' name='photo' onChange={onInputChange} /></label><br></br>
            <label> Artwork Name : 
            <input
              type="text"
              name="artworkName"
              onChange={(event) => {
                setArtworkName(event.target.value);
              }}
            /> </label> <br></br>
            <label>Artwork Description : 
            <input
              type="textarea"
              height="100px"
              name="artworkDescription"
              onChange={(event) => {
                setArtworkDescription(event.target.value);
              }}
            /> </label><br></br>
            <label> Name of Artist : 
            <input
              type="text"
              name="artworkArtist"
              onChange={(event) => {
                setArtworkArtist(event.target.value);
              }}
            /> </label><br></br>
            <label> Email of Artist : 
            <input
              type="text"
              name="artworkArtistEmail"
              onChange={(event) => {
                setArtworkArtistEmail(event.target.value);
              }}
            /> </label><br></br>
            <label>Artwork Price : 
            <input
              type="text"
              name="artworkPrice"
              onChange={(event) => {
                setArtworkPrice(event.target.value);
              }}
            /> </label><br></br>
            <label>Artwork Dimensions <br></br>(width*height in cm): 
            <input
              type="text"
              name="artworkDimension"
              onChange={(event) => {
                setArtworkDimension(event.target.value);
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
            <label> Enter your district : 
            <select
                       className="district"
                       onChange={(event) => {
                        setArtistDistrict(event.target.value);
                       }}
                        name="artistdistrict"
                       
                      >
                        <option value="">- Choose your district -</option>
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
                        <option value="Nuwara Eliya">Nuwara Eliya</option>
                        <option value="Polonnaruwa">Polonnaruwa</option>
                        <option value="Puttalam">Puttalam</option>
                        <option value="Rathnapura">Ratnapura</option>
                        <option value="Trincomalee">Trincomalee</option>
                        <option value="Vavuniya">Vavuniya</option>
                        
                      </select>
            {/* <input
              type="text"
              name="artistProvince"
              onChange={(event) => {
                setArtistProvince(event.target.value);
              }}
            />  */}
            </label> <br></br>
            <label> Enter per km delivery charge : 
            <select
                       className="district"
                       onChange={(event) => {
                        setPerKmCharge(event.target.value);
                       }}
                        name="perkmcharge"
                       
                      >
                        <option value="1"> Rs. 1.00</option>
                        <option value="2">Rs. 2.00</option>
                        <option value="3">Rs. 3.00</option>
                        <option value="3">Rs. 4.00</option>
                        </select>
            </label><br></br>
            <label className="cate">Select Artwork Category : 
            <label for="html" className="category">Historical
            <input type="radio" name="artworkCategory" value="Historical" onChange={(event) => {
                setArtworkCategory(event.target.value);
              }}/></label> 
{/*                 <label for="html">Historical</label> */}
            <label for="css" className="category">Painting
            <input type="radio" name="artworkCategory" value="Painting" onChange={(event) => {
                setArtworkCategory(event.target.value);
              }}/>
              </label>
            <label for="javascript" className="category">Drawing
              <input type="radio" name="artworkCategory" value="Drawing" onChange={(event) => {
                setArtworkCategory(event.target.value);
              }}/>
              </label>
            <label for="javascript" className="category">Fine Art
              <input type="radio" name="artworkCategory" value="Fine Art" onChange={(event) => {
                setArtworkCategory(event.target.value);
              }}/>
              </label>
            <label for="javascript" className="category">Portrait
              <input type="radio" name="artworkCategory" value="Portrait" onChange={(event) => {
                setArtworkCategory(event.target.value);
              }}/>
              </label>
            </label>
            
{/*             
            <Link
              to='/artistartworks'
              
            >  */}
            <button className="but"> Submit Artwork </button>
            {/* </Link>      */}
            </div>
            </form>
            </div>
            </div>
        
    );
};
