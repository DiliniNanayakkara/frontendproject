import Navbar from "../Navbar";
import React, { useState } from "react";
import Axios from "axios";
import "../../App.css";

import { useHistory } from "react-router-dom";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { red } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        All Rights Recieved
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Registration() {
  const classes = useStyles();
  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [firstReg, setfirstReg] = useState("");
  const [lastReg, setLastReg] = useState("");
  const [errorMsg, seterrorMsg] = useState("");
  const [numberReg, setNumberReg] = useState("");

  Axios.defaults.withCredentials = true;
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const validation = (val) => {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(val)) {
      /* return true */
      seterrorMsg("");
      //   console.log("if");
    } else {
      seterrorMsg("invalisd");
      //   console.log("else");
    }
  };

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
      first: firstReg,
      last: lastReg,
      number: numberReg,
    }).then((response) => {});
    handleClick();
    history.push("/login");
  };

  return (
    <>
      {/*} <Navbar />
      <center>
        <h1 className="SignUp">SignUp/Login</h1>
      </center>

  <Navbar />*/}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={(e) => {
                    setfirstReg(e.target.value);
                  }}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={(e) => {
                    setLastReg(e.target.value);
                  }}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setUsernameReg(e.target.value);
                    validation(e.target.value);
                  }}
                />
                <span id="validation" style={{ color: "red" }}>
                  {errorMsg};
                </span>
              </Grid>
              <Grid item xs={12}>
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value=" Buyer"
                    id="myid"
                    control={<Radio color="primary" />}
                    label="Buyer"
                    labelPlacement="start"
                  />

                  <FormControlLabel
                    value="Seller"
                    id="myid"
                    control={<Radio color="primary" />}
                    label="Seller"
                    labelPlacement="start"
                  />
                </RadioGroup>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => {
                    setPasswordReg(e.target.value);
                  }}
                  autoComplete="current-password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="contactnumber"
                  label="contact number"
                  type="contactnumber"
                  id="number"
                  onChange={(e) => {
                    setNumberReg(e.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I agree to term and conditions"
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={register}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
