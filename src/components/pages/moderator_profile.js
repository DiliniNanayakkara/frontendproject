import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import '../css/Profile.css';
import AdminNavbar from "../AdminNavbar";

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

  return (
    <div className="A">
      <AdminNavbar />

      <div className={classes.root_main}>
        <Paper style={{ backgroundColor: "#ebe6e6" }}>
          <Grid container spacing={0}>
            <Grid item xs={5}>
              <Paper className={classes.paper2}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9S4BZjQjJrZYGcQSiWxGW-Y7dk26BhPc54dJDWG7SaEtE6pp3DYIvSQKcaQPy5WK2qI&usqp=CAU"
                  style={{ width: "95%", height: "auto" }}
                />

                <Typography variant="body2" color="textPrimary" component="p">
                  <h1>Shamila Dissanayake</h1>
                </Typography>
                {/* <Typography variant="body2" color="textPrimary" component="p">
                                    <p>⭐⭐⭐⭐⭐ 5.0 (827 reviews)</p>
                                </Typography>
                                
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <h3>Hi! 👻 I am a professional artist who comes to show my artwork. You can see my portfolio and I hope you will 
                                        enjoy it! If you have any questions do not hesitate to ask, I will answer immediately! 👻</h3>
                                </Typography> */}
              </Paper>
            </Grid>
            <Grid item xs={7} className={classes.root_font1}>
              <Paper className={classes.paper2}>
                <h2>USER PROFILE</h2>
                <TextField
                  id="standard-read-only-input"
                  label="UserID:"
                  defaultValue="12345"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  id="standard-read-only-input"
                  label="Name:"
                  defaultValue="Shamila Dissanayake"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  id="standard-read-only-input"
                  label="Email address:"
                  defaultValue="shamilad@gmail.com"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  id="standard-read-only-input"
                  label="Phone:"
                  defaultValue="0711111111"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  id="standard-read-only-input"
                  label="Address:"
                  defaultValue="23, Oak Garden, Kandy"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                {/* <TextField
                                    id="standard-read-only-input"
                                    label="Issued upcoming exhibitions:"
                                    defaultValue="None"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                /> */}
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
                {/* <Grid container>
                                    <Grid item xs={7}>
                                        <Typography style={{marginTop: '36.5px'}} variant="body2" color="textPrimary" component="p">
                                            <p>Do you Want to register as a customized potrait artist?</p>
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={5}>
                                        <div>
                                            <Button style={{marginTop: '36.5px'}} variant="contained" fullWidth >
                                                Register
                                            </Button>
                                        </div>
                                    </Grid>
                                </Grid> */}
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
