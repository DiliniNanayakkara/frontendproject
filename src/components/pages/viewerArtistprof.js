import React, { useEffect, useState } from "react";
import images from "./data";
import Axios from "axios";
import { SRLWrapper } from "simple-react-lightbox";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "../css/Profile.css";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

// import '../css/Profile.css';

import { HorizontalSplit } from "@material-ui/icons";
import { yellow } from "@material-ui/core/colors";

const options = {
  // settings: {
  // 	overlayColor: 'rgb(25, 136, 124)',
  // 	autoplaySpeed: 1500,
  // 	transitionSpeed: 900
  // },
  // buttons: {
  // 	backgroundColor: 'red',
  // 	iconColor: 'rgba(126, 172, 139, 0.8)'
  // },
  // caption: {
  // 	captionColor: '#a6cfa5',
  // 	captionFontFamily: 'Raleway, sans-serif',
  // 	captionFontWeight: '300',
  // 	captionTextTransform: 'uppercase'
  // },
  // progressBar: {
  // 	height: '20px',
  // 	fillColor: 'blue',
  // 	backgroundColor: 'white'
  // }
};

const useStyles = makeStyles((theme) => ({
  root_main: {
    justifyContent: "center",
    justifyItems: "center",
    paddingTop: "8px",
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(1000),
      height: theme.spacing.auto,
    },
  },

  root_card1: {
    maxWidth: 345,
  },
  media_card1: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    // paddingTop: '10px',
    // paddingTop: theme.spacing(4),
  },

  root_paper: {
    justifyContent: "center",
    paddingTop: "100px",
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(),
      height: theme.spacing(30),
    },
  },

  paper2: {
    // paddingTop: '10px',
    // paddingBottom: '20px',
    // paddingLeft: '23px',
    // paddingRight: '23px',

    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    justifyContent: "center",
    justifyItems: "center",
    // outlineStyle: '20px',
  },

  root_font1: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "600px",
    },
  },

  root_button: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Artist_Profile() {
  const classes = useStyles();
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  const [artistID, setArtworkID] = useState(
    window.location.pathname.split("/")[2]
  );

  useEffect(() => {
    setArtworkID(window.location.pathname.split("/")[2]);
  }, [window.location.pathname]);

  const [employeeList, setEmployeeList] = useState([]);
  const [employeedis, setEmployeedis] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:5000/Artistlistby/${artistID}`).then(
      (response) => {
        setEmployeeList(response.data);
      }
    );
  });
  useEffect(() => {
    Axios.get(`http://localhost:5000/Artistlistbydis/${artistID}`).then(
      (response) => {
        setEmployeedis(response.data);
      }
    );
  });

  return (
    <div className="A">
      <div className="backbtn">
        <Link to="/viewartists">
          {" "}
          <button className="button">BACK</button>
        </Link>
      </div>
      <div className="profiledata">
        {employeedis.map((val, key) => {
          return (
            <center>
              <img
                src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                style={{
                  width: "100px",
                  marginTop: "20px",
                  marginBottom: "50px",
                  height: "auto",
                }}
              ></img>

              <h1>{val.first_name + val.last_name}</h1>
              <h3>{val.description}</h3>
            </center>
          );
        })}

        {/*btn */}

        <div className="btn">
          <Link to="/login">
            <Button variant="contained">Commisions</Button>
          </Link>
        </div>
        {/*btn */}
      </div>
      {/*profiledata */}
      {employeeList.map((val, key) => {
        return (
          <div className="profiledetails">
            <center>
              <h2>USER PROFILE</h2>
              <TextField
                className="feild"
                id="standard-read-only-input"
                label="UserID:"
                defaultValue={val.artist_id}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                className="feild"
                id="standard-read-only-input"
                label="Name:"
                defaultValue={val.first_name + val.last_name}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                className="feild"
                id="standard-read-only-input"
                label="Email address:"
                defaultValue={val.email}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                className="feild"
                id="standard-read-only-input"
                label="Phone:"
                defaultValue={val.contact_no}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                className="feild"
                id="standard-read-only-input"
                label="Location:"
                defaultValue={val.location}
                InputProps={{
                  readOnly: true,
                }}
              />
            </center>

            {/*btn */}

            {/*btn */}
          </div> /*profiledetails */
        );
      })}
      <div className="ArtistPortfolio"></div>
      {/*ArtistPortfolio */}
      <div className="uploadArts">
        <div className="artpagedata">
          <center>
            <h1>Art Work Gallery</h1>
            <Button variant="contained">Upload Works</Button>
          </center>
        </div>
        {/*artpagedata */}
      </div>
      {/*uploadArts */}

      <div className="Appw">
        <div className="tags">
          <TagButton
            name="all"
            tagActive={tag === "all" ? true : false}
            handleSetTag={setTag}
          />{" "}
          /
          <TagButton
            name="oil"
            tagActive={tag === "oil" ? true : false}
            handleSetTag={setTag}
          />{" "}
          /
          <TagButton
            name="water"
            tagActive={tag === "water" ? true : false}
            handleSetTag={setTag}
          />{" "}
          /
          <TagButton
            name="pencile"
            tagActive={tag === "pencile" ? true : false}
            handleSetTag={setTag}
          />
        </div>
        {/*tags */}
        <SRLWrapper options={options}>
          <div className="containerx">
            {filteredImages.map((image) => (
              <div key={image.id} className="image-card">
                <a href={`/images/${image.imageName}`}>
                  <img
                    className="image"
                    src={require(`../../assests/${image.imageName}`).default}
                    alt=""
                  />
                </a>
              </div> /*image-card*/
            ))}
          </div>
          {/*containerx*/}
        </SRLWrapper>
      </div>
      {/*Appw*/}
    </div> /*A */
  );
}
const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};
