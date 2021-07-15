import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

export default function Title(props) {
  return (
    <Typography component="h2" variant="h1" color="textPrimary" gutterBottom>
      Welcome to de l'art {props.children}
      <img
        className="sidepic"
        src={require("../../assests/buyer.png").default}
        alt=""
        width="350"
        height="200"
      ></img>
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};
