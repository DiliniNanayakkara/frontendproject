import React, {useState, useEffect} from 'react';
import '../css/Orders.css';
import ArtistNavbar from '../ArtistNavbar';
import axios from 'axios';

export default function Orders (){

      const [artworkName, setArtworkName] = useState("")
      const [artworkDescription, setArtworkDescription] = useState("") 
      const [artworkPrice, setArtworkPrice] = useState(0)
      const [artworkCategory, setArtworkCategory] = useState("")
      const [artworkUpload, setArtworkUpload] = useState([])
      const [artworkQuantity, setArtworkQuantity] = useState(0)
      const [artworkList, setArtworkList] = useState([]);
      const addArtwork = () => {
           axios.post('http://localhost:3001/create', {
                 artworkName: artworkName,
                 artworkDescription: artworkDescription,
                 artworkUpload: artworkUpload,
                 artworkPrice: artworkPrice,
                 artworkCategory: artworkCategory,
                 artworkQuantity: artworkQuantity
           }).then(() => {
                 console.log("success");
           });
      };
      useEffect(() => {
            axios.get('http://localhost:3001/artworks').then((response) => {
                   setArtworkList(response.data);
            });
      }, []);

      return (
  
            <div className="A"> 
            <ArtistNavbar/>
            
            <div className="form">
                  <h2>Upload Artwork </h2>
                  <div className="forminfo">
                  <label>Artwork Name : </label>
                  <input type="text" name="artworkName" onChange={(event)=> {
                        setArtworkName(event.target.value);
                  }}/>
                  <label>Artwork Description : </label>
                  <input type="textarea" name="artworkDescription" onChange={(event)=> {
                        setArtworkDescription(event.target.value);
                   }} />
                   <label>Artwork Upload: </label>
                  <input type="file" name="artworkUpload" onChange={(event)=> {
                        setArtworkUpload(event.target.value);
                   }} />
                  <label>Artwork Price : </label>
                  <input type="text" name="artworkPrice" onChange={(event)=> {
                        setArtworkPrice(event.target.value);
                  }}/>
                  <label>Artwork Category : </label>
                  <select onChange={(event)=> {
                        setArtworkCategory(event.target.value);}}>
                  <option value="Historical">Historical</option>
                  <option value="Painting">Painting</option>
                  <option defaultValue="Drawing">Drawing</option>
                  <option value="Portrait">Portrait</option>
                  <option value="FineArt">Fine Art</option>
                  </select>
                  
                  <label>Artwork Quantity : </label>
                  <input type="text" name="artworkQuantity" onChange={(event)=> {
                        setArtworkQuantity(event.target.value);
                  }}/>
                  
                  <button onClick={addArtwork}>Submit</button>
                  </div>
            </div>
          </div>

      );
  
}