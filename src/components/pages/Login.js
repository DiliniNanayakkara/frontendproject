import "../../App.css";
import Navbar from "../Navbar";

import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import axios from "axios";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { render } from "react-dom";

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

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1541753866388-0b3c701627d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80)",
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

// function meRedirect(history) {
//   history.push("/products");
// }

// function artistRedirect(history) {
//   history.push("/artistDashboard");
// }

// function buyerRedirect(history) {
//   history.push("/buyerDashboard");
// }

// function adminRedirect(history) {
//   history.push("/admin_profile");
// }

// function modRedirect(history) {
//   history.push("/moderatorhome");
// }

export default function Login() {
  let history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState(false);

  axios.defaults.withCredentials = true;
  const classes = useStyles();

  const login = () => {
    //const { handleChange, handleSubmit, values, errors } = useForm();
    console.log("Function hitted, values", username, password);
    axios
      .post("http://localhost:5000/login", {
        //values: values,
        username: username,
        password: password,
      })
      .then((response) => {
        console.log("API hitted");
        if (!response.data.auth) {
          //setLoginStatus(response.data.message);
          setLoginStatus(false);
          // return loginStatus;
        } else {
          console.log("API Auth hitted");
          //setLoginStatus(response.data.result[0].email);
          //console.log(response);
          //setLoginStatus(true);

          localStorage.setItem("token", response.data.token);
          setLoginStatus(true);
          if (response.data.role == "artist") {
            console.log("API role hitted");
            localStorage.setItem("userName", response.data.username);
            history.push({
              pathname: "/artistdashbord",
              // pathname: "/Artist_profile",
              userName: response.data.username,
              role: response.data.role,
            });
          }

          if (response.data.role == "customer") {
            console.log("API role hitted");
            history.push({
              pathname: "/c_home",
              // pathname: "/Artist_profile",
              userName: response.data.username,
              role: response.data.role,
            });
          }
          if (response.data.role == "admin") {
            console.log("API role hitted");
            history.push({
              pathname: "/dashbord",
              // pathname: "/Artist_profile",
              userName: response.data.username,
              role: response.data.role,
            });
          }
          //return loginStatus;
        }
      });
  };

  // useEffect(() => {
  //   axios.get("http://localhost:5000/login").then((response) => {
  //     if (response.data.loggedIn == true) {
  //       //setLoginStatus(response.data.user[0].email);
  //       //console.log(response);
  //       setLoginStatus(true);
  //     }
  //   });
  // }, []);

  // const login = () => {
  //   axios.post("http://localhost:3001/login", {
  //     username: username,
  //     password: password,
  //   }).then((response) => {
  //     if (response.data.message) {
  //       setLoginStatus(response.data.message);
  //     } else {
  //       setLoginStatus(response.data[0].username);
  //       meRedirect(history);
  //       if (response.data[0].role == "artist");
  //       artistRedirect(history);
  //       if (response.data[0].role == "buyer");
  //       buyerRedirect(history);
  //       if (response.data[0].role == "admin");
  //       adminRedirect(history);
  //       if (response.data[0].role == "moderator");
  //       modRedirect(history);
  //     }
  //     return;
  //   });
  // };

  return (
    <>
      {/* <Navbar /> */}

      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="username"
                autoComplete="email"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={login}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="./Signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                  {/* <h1>{loginStatus}</h1> */}

                  {/* {loginStatus && <button>Check Authentication</button>} */}
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
              {/* <div>
                {loginStatus ? (
                  <Button fullWidth variant="contained" color="secondary">
                    hech
                  </Button>
                ) : (
                  "ERROR"
                )}
              </div> */}

              {/* <div>
                {loginStatus && (
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={authentication}
                  >
                    Authentication
                  </Button>
                )}
              </div> */}

              {/* <div>{loginStatus ? "HIIIIIIIIIIIIIIIII" : "ERROR"}</div>
              <h1>{loginStatus}</h1>
              <div>{loginStatus && <button>Check Authentication</button>}</div> */}
            </form>
            {/* {loginStatus && <h1>HELLO</h1>}
            <div>{loginStatus && <h1>LOGGED</h1>}</div> */}
          </div>
        </Grid>
      </Grid>
    </>
    //   <div>
    //   {loginStatus && (
    //     <Button
    //       fullWidth
    //       variant="contained"
    //       color="secondary"
    //       onClick={login}
    //     >
    //       hech
    //     </Button>
    //   )}
    // </div>

    // {loginStatus && (<button>Check Authentication</button>)}
  );
}
