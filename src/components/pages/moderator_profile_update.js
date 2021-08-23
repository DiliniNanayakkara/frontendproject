import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
//import React from 'react';
import Grid from "@material-ui/core/Grid";
// import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import ArtistNavbar from "../ArtistNavbar";

const useStyles = makeStyles((theme) => ({
  //   appBar: {
  //     position: 'relative',
  //   },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  root_button: {
    "& > *": {
      margin: theme.spacing(7),
    },
  },
}));

export default function Artist_Profile_Edit() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <div className="A">
        <ArtistNavbar />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h2" variant="h4" align="center">
              Edit my profile
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="standard-read-only-input"
                  label="UserID:"
                  defaultValue="12345"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="standard-helperText"
                  label="First Name"
                  defaultValue="Dilini"
                  //   helperText="Some important text"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="standard-helperText"
                  label="Last Name"
                  defaultValue="Nanayakkara"
                  //   helperText="Some important text"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  //  id="address2"
                  //  name="address2"
                  id="standard-helperText"
                  label="Email Address"
                  defaultValue="dilinin@gmail.com"
                  fullWidth
                  //  autoComplete="shipping address-line2"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="standard-helperText"
                  label="Phone Number"
                  defaultValue="0711111111"
                  //   helperText="Some important text"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="standard-helperText"
                  label="Location"
                  defaultValue="Kandy, Sri Lanka"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}></Grid>
            </Grid>

            <div align="center">
              <Button
                style={{ marginTop: "36.5px" }}
                variant="contained"
                fullWidth
              >
                Save
              </Button>
            </div>
          </Paper>
        </main>
      </div>
    </React.Fragment>
  );
}
