import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArtistNavbar from "../ArtistNavbar";

export default function Advertisement_upload() {
  //const classes = useStyles();
  // const [tag, setTag] = useState('all');
  // const [filteredImages, setFilteredImages] = useState([]);

  return (
    <div className="A">
      <ArtistNavbar />
      <form>
        <div>
          <h1>Upload Advertisements</h1>
        </div>
        <div>
          <div>
            <label>Exhibition Date: </label>
            <input type="text" name="exhi_date"></input>
          </div>

          <div>
            <label>Advertisement Broadcasting Start Date: </label>
            <input type="text" name="exhi_date"></input>
          </div>

          <div>
            <label>Advertisement Expiry Date: </label>
            <input type="text" name="exhi_date"></input>
          </div>

          <div>
            <label>Upload Advertisement: </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              multiple={false}
              //   onChange={imageHandler}
            />
          </div>

          {/* <label>Exhibition Date: </label>
          <input type="text" name="exhi_date"></input> */}
        </div>
      </form>
    </div>
  );
}
