import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ModeratorNavbar from "./ModeratorNavbar";
import axios from "axios";

export default function Advertisement_upload() {
  //const classes = useStyles();
  // const [tag, setTag] = useState('all');
  // const [filteredImages, setFilteredImages] = useState([]);

  const [advertisementUpload, setAdvertisementUpload] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const [exhi_date, setExhiDate] = useState("");
  const [start_date, setStartDate] = useState("");
  const [expiry_date, setExpiryDate] = useState("");
  const [file, setFile] = useState(null);
  // <h2> {uploadStatus} </h2>;

  const addAdvertisement = () => {
    axios
      .post("http://localhost:5000/api/image", {
        advertisementUpload: advertisementUpload,
        exhi_date: exhi_date,
        start_date: start_date,
        expiry_date: expiry_date,
        //artworkArtist: artworkArtist,
        //artworkCategory: artworkCategory,
      })
      .then(() => {
        console.log("success");
      });
  };

  const onFormSubmit = (event) => {
    //const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    formData.append("exhi_date", exhi_date);
    formData.append("start_date", start_date);
    formData.append("expiry_date", expiry_date);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post("http://localhost:3001/api/image", formData, config)
      .then((response) => {
        //alert("Image Uploaded Successfully");
        setUploadStatus(response.data);
        <h2> {uploadStatus} </h2>;
        alert(uploadStatus);
        //alert("******************");
      })
      .catch((err) => {
        console.log("err", err);
      });

    //-----------------------------------------------------------------

    // axios
    //   .get("http://localhost:3001/api/image")
    //   .then((response) => this.setUploadStatus({ items: response.data }))
    //   .catch((err) => {
    //     this.setUploadStatus({ errorMessage: err.message });
    //   });

    // {
    //   this.uploadStatus.items && <h3> {this.uploadStatus.items} </h3>;
    // }

    //-----------------------------------------------------------------

    //---------------------------------------------------------
    // axios
    //   .post("http://localhost:3001/api/image", {
    //     //method: "POST",
    //     body: formData,
    //     headers: {
    //       Accept: "multipart/form-data",
    //     },
    //     //credentials: "include",
    //     advertisementUpload: advertisementUpload,
    //     exhi_date: exhi_date,
    //     start_date: start_date,
    //     expiry_date: expiry_date,
    //     //       artworkArtist: artworkArtist,
    //     //       artworkCategory: artworkCategory,
    //   })
    //   //.then((res) => res.json())
    //   .then((res) => {
    //     setUploadStatus(res.msg);
    //     <h2> {uploadStatus} </h2>;
    //     console.log("Successssssss................");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     <h2> {uploadStatus} </h2>;
    //     console.log("Errorrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
    //   });

    //--------------------------------------------------------
  };

  const imageHandler = (event) => {
    setFile(event.target.files[0]);
    setAdvertisementUpload(event.target.value);
  };

  return (
    <div className="A">
      <ModeratorNavbar />
      <form onSubmit={onFormSubmit}>
        <div>
          <h1>Upload Advertisements</h1>
        </div>
        <div>
          <div>
            <label>Exhibition Date: </label>
            <input
              type="date"
              name="exhi_date"
              onChange={(event) => {
                setExhiDate(event.target.value);
              }}
            ></input>
          </div>

          <div>
            <label>Advertisement Broadcasting Start Date: </label>
            <input
              type="date"
              name="start_date"
              onChange={(event) => {
                setStartDate(event.target.value);
              }}
            ></input>
          </div>

          <div>
            <label>Advertisement Expiry Date: </label>
            <input
              type="date"
              name="expiry_date"
              onChange={(event) => {
                setExpiryDate(event.target.value);
              }}
            ></input>
          </div>

          <div>
            <label>Upload Advertisement: </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              multiple={false}
              onChange={imageHandler}
            />
          </div>

          {/* <label>Exhibition Date: </label>
          <input type="text" name="exhi_date"></input> */}
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
