import React, { useState } from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import "../../App.css";
//import { useState } from "react";

// export default function Login() {
//   return (
//     <>
//     <Navbar/>
//       <center><h1 className='login'>Login</h1></center>
//     </>
//   );
// }

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/Web-design-vs-web-de.jpg?auto=format&q=60&w=1860&h=1860&fit=crop&crop=faces)",

    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Customized_Artist() {
  const classes = useStyles();

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {
    setSelectedFiles([]);
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <img
          src={photo}
          alt=""
          key={photo}
          style={{ width: "20%", height: "180px" }}
        />
      );
    });
  };

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Create Exhibition
            </Typography>

            <form className={classes.form} noValidate>
              <h3>Artist Name:</h3>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Artist Name"
                label="Artist Name"
                name="ArtistName"
                autoFocus
              />

              <h3>Exhibition Category:</h3>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="Category"
                label="Exhibition Category"
                type="varchar"
                id="category"
              />

              <h3>Exhibition Name:</h3>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="exhi_name"
                label="Exhibition Name"
                type="varchar"
                id="exhi_name"
              />

              <h3>Expected Exhibition Date: </h3>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="exhi_date"
                name="exhi_date"
                type="date"
              />

              <h3>Upload Artworks:</h3>
              <input
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="file[]"
                type="file"
                accept="image/*"
                multiple="true"
                onChange={handleImageChange}
                id="Add Images"
              />
              <div>{renderPhotos(selectedFiles)}</div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Create Exhibition
              </Button>
              <Grid container>
                <Grid item></Grid>
              </Grid>
              <Box mt={5}></Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
