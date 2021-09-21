import React, { useState, useEffect } from "react";
import "../../css/moderator/ManageTool.css";
import ModeratorNavbar from "./ModeratorNavbar";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Alert } from "@material-ui/lab";
export default function ArtworkUpload() {
    
    const [file, setfile] = useState(null);
    const [toolUpload, setToolUpload] = useState([]);
    const [toolrkName, setToolName] = useState("");
    const [quantity, setQyantity] = useState("");
    const [ToolPrice, setToolPrice] = useState(0);
    const [toolCategory, setToolCategory] = useState("");
    const addArtwork = () => {
        axios
          .post("http://localhost:5000/upload", {
            toolUpload: setToolUpload,
            toolrkName: setToolName,
            quantity: setQyantity,
            ToolPrice: setToolPrice,
            toolCategory: setToolCategory,
           

          })
          .then(() => {
            console.log("success");
          });
      };
    const onFormSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('photo', file);
        formData.append('toolrkName', toolrkName);
        formData.append('quantity', quantity);
        formData.append('ToolPrice', ToolPrice);
        formData.append('toolCategory', toolCategory);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
   
    axios.
    post("http://localhost:5000/upload", formData, config)
    .then((response) => {
        alert('Image Uploaded Successfully');
    })
    .catch((err) => {
        console.log('err', err);
    });
};
    const onInputChange = (e) => {
        setfile(e.target.files[0]);
        setToolUpload(e.target.value);
    }
    return(
        <div className="A">
       <ModeratorNavbar />

        <div className="uploadform">
        <form onSubmit={onFormSubmit}>
            
            <div className="uploadforminfo">
            <h1 className="heading">Tool Upload</h1>
            <label>Tool Image :                       
            <input type='file' name='photo' onChange={onInputChange} /></label><br></br>
            <label> Tool Name : 
            <input
              type="text"
              name="artworkName"
              onChange={(event) => {
                  setToolName(event.target.value);
              }}
            /> </label> <br></br>
       
            <label> Total Quantity : 
            <input
              type="text"
              name="artworkArtist"
              onChange={(event) => {
                  setQyantity(event.target.value);
              }}
            /> </label><br></br>
            <label>Tool Price : 
            <input
              type="text"
              name="artworkPrice"
              onChange={(event) => {
                  setToolPrice(event.target.value);
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
            <label for="html" className="category">Brushes  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      
            <input type="radio" name="artworkCategory" value="Historical" onChange={(event) => {
                setToolCategory(event.target.value);
              }}/></label> 
{/*                 <label for="html">Historical</label> */}
            <label for="css" className="category">Bords/Canvas
            <input type="radio" name="artworkCategory" value="Painting" onChange={(event) => {
                setToolCategory(event.target.value);
              }}/>
              </label>
            <label for="javascript" className="category">Painting &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" name="artworkCategory" value="Drawing" onChange={(event) => {
                setToolCategory(event.target.value);
              }}/>
              </label>
            <label for="javascript" className="category">Easels &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
              <input type="radio" name="artworkCategory" value="Fine Art" onChange={(event) => {
                setToolCategory(event.target.value);
              }}/>
              </label>
            <label for="javascript" className="category">Other &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
              <input type="radio" name="artworkCategory" value="Portrait" onChange={(event) => {
                setToolCategory(event.target.value);
              }}/>
              </label>
            </label>
            
            
            {/* <Link
              to='/artworks'
              
            >  */}
            <button className="but"> Add </button>
            {/* </Link>      */}
            </div>
            </form>
            </div>
            </div>
        
    );
};