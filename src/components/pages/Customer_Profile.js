import React, { useEffect, useState } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import '../css/Profile.css';
import RegCusNavbar from "../RegCusNavbar";

const useStyles = makeStyles((theme) => ({
  root_main: {
    justifyContent: "center",
    justifyItems: "center",
    paddingTop: "8px",
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing.auto,
    },
  },

  paper2: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    justifyContent: "center",
    justifyItems: "center",
  },

  root_font1: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  root_button: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Customer_Profile() {
  const classes = useStyles();
  const [employeedis, setEmployeedis] = useState([]);
  useEffect(() => {
    let email = localStorage.getItem("user");
    Axios.get("http://localhost:5000/buyerd/" + email).then((response) => {
      setEmployeedis(response.data);
    });
  });

  return (
    <div className="A">
      <RegCusNavbar />
      {employeedis.map((val, key) => {
        return (
          <div className={classes.root_main}>
            <Paper style={{ backgroundColor: "#ebe6e6" }}>
              <Grid container spacing={0}>
                <Grid item xs={5}>
                  <Paper className={classes.paper2}>
                    <img
                      src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                      style={{ width: "95%", height: "auto" }}
                    />

                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      <h1>{val.first_name + val.last_name}</h1>
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={7} className={classes.root_font1}>
                  <Paper className={classes.paper2}>
                    <h2>USER PROFILE</h2>

                    <TextField
                      id="standard-read-only-input"
                      label="Name:"
                      defaultValue={val.first_name + val.last_name}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="standard-read-only-input"
                      label="Email address:"
                      defaultValue={val.email}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="standard-read-only-input"
                      label="Phone:"
                      defaultValue={val.contact_no}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="standard-read-only-input"
                      label="Address:"
                      defaultValue={val.address}
                      InputProps={{
                        readOnly: true,
                      }}
                    />

                    {/* <TextField
                                    id="standard-read-only-input"
                                    label="Customized Artist (Yes / No):"
                                    defaultValue="No"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                /> */}
                    <div className={classes.root_button}>
                      <Button variant="contained" color="secondary">
                        Edit
                      </Button>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </div>
        );
      })}
    </div>
  );
}
