import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import ArtistNavbar from "../ArtistNavbar";
import { Link } from "react-router-dom";
import "./artistdashbord.css";

export default function Title(props) {
  return (
    <div>
      <Typography component="h2" variant="h1" color="textPrimary" gutterBottom>
        WelcomeArtist ... {props.children}
        <img
          className="sidepic"
          src={require("../../assests/preview.png").default}
          alt=""
          width="350"
          height="200"
        ></img>
      </Typography>
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};
