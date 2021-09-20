import React, { useState, useEffect } from "react";
import "../../css/Orders.css";
//import ArtistNavbar from "../ArtistNavbar";
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
    const addArtwork = () => {
        axios
          .post("http://localhost:3001/up", {
            artworkUpload: artworkUpload,
            artworkName: artworkName,
            artworkDescription: artworkDescription,
            artworkPrice: artworkPrice,
            artworkArtist: artworkArtist,
            artworkCategory: artworkCategory,

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
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
   
    axios.
    post("http://localhost:3001/upload", formData, config)
    .then((response) => {
        alert('Image Uploaded Successfully');
    })
    .catch((err) => {
        console.log('err', err);
    });
};
    const onInputChange = (e) => {
        setfile(e.target.files[0]);
        setArtworkUpload(e.target.value);
    }
    return(
        <div className="A">
        {/* <ArtistNavbar /> */}

        <div className="uploadform">
        <form onSubmit={onFormSubmit}>
            
            <div className="uploadforminfo">
            <h1 className="heading">Artwork Upload</h1>
            <label>Tool Image :                       
            <input type='file' name='photo' onChange={onInputChange} /></label><br></br>
            <label> Tool Name : 
            <input
              type="text"
              name="artworkName"
              onChange={(event) => {
                setArtworkName(event.target.value);
              }}
            /> </label> <br></br>
       
            <label> Total Quantity : 
            <input
              type="text"
              name="artworkArtist"
              onChange={(event) => {
                setArtworkArtist(event.target.value);
              }}
            /> </label><br></br>
            <label>Tool Price : 
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
            <label className="cate">Select Category : 
            <label for="html" className="category">Brushes
            <input type="radio" name="artworkCategory" value="Historical" onChange={(event) => {
                setArtworkCategory(event.target.value);
              }}/></label> 
{/*                 <label for="html">Historical</label> */}
            <label for="css" className="category">Bords/Canvas
            <input type="radio" name="artworkCategory" value="Painting" onChange={(event) => {
                setArtworkCategory(event.target.value);
              }}/>
              </label>
            <label for="javascript" className="category">Painting
              <input type="radio" name="artworkCategory" value="Drawing" onChange={(event) => {
                setArtworkCategory(event.target.value);
              }}/>
              </label>
            <label for="javascript" className="category">Easels
              <input type="radio" name="artworkCategory" value="Fine Art" onChange={(event) => {
                setArtworkCategory(event.target.value);
              }}/>
              </label>
            <label for="javascript" className="category">Other
              <input type="radio" name="artworkCategory" value="Portrait" onChange={(event) => {
                setArtworkCategory(event.target.value);
              }}/>
              </label>
            </label>
            
            
            {/* <Link
              to='/artworks'
              
            >  */}
            <button className="but"> Submit Artwork </button>
            {/* </Link>      */}
            </div>
            </form>
            </div>
            </div>
        
    );
};