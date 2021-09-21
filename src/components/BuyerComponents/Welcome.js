import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

export default function Title(props) {
  return (
    <div>
      <Typography component="h2" variant="h1" color="textPrimary" gutterBottom>
        Welcome Amasha... {props.children}
        <img
          className="sidepic"
          src={require("../../assests/buyer.png").default}
          alt=""
          width="200"
          height="200"
        ></img>
      </Typography>
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};
