import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import '../css/Profile.css';
import ArtistNavbar from "ArtistNavbar.js";
import { HorizontalSplit } from "@material-ui/icons";
import { yellow } from "@material-ui/core/colors";
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
      width: "25ch",
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
  return (
    // <div className="A">
    //     <ArtistNavbar/>
    //     <center>
    //         <h1>De'lart Artist Profile , pages wela Profile page eka thama me thiyenne... Nav bar eka components wla ArtistsNavbar.js,
    //         css eka css folder eke Profile.css eka.</h1>
    //     </center>
    //     <div className='C'>
    //         <img className="Photo" src='https://www.artshedonline.com.au/assets/images/easels.jpg' alt="" width="1350" height="500"></img>
    //     </div>

    // </div>
    <div className="A">
      <ArtistNavbar />
      <div className={classes.root_main}>
        <Paper style={{ backgroundColor: "#ebe6e6" }}>
          <Card className={classes.root_card1}>
            <CardMedia
            // className={classes.media_card1}
            // image="data:image/jpeg;base64,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"
            // title="Paella dish"
            />
            {/* <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                #####
                            </Typography>
                        </CardContent> */}
          </Card>
          <Card className={classes.root_card1}>
            <CardMedia
            // className={classes.media_card1}
            // image="data:image/jpeg;base64,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"
            // title="Paella dish"
            />
          </Card>
          {/* <Grid container spacing={3}>
                        {/* Chart */}
          {/* <Grid item xs={12} md={8} lg={9}>
                        <Paper className={classes.root_paper} >
                            {/* <Chart /> */}
          {/* </Paper>
                        </Grid>
                    </Grid> */}

          <Grid container spacing={0}>
            <Grid item xs={5}>
              <Paper className={classes.paper2}>
                {/* <Card className={classes.root_card1}>
                                    <CardMedia
                                        className={classes.media_card1}
                                        image="data:image/jpeg;base64,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"
                                        // title="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <h1>Shamila Perera</h1>
                                        </Typography>
                                    </CardContent>
                                </Card> */}
                <img
                  src="https://i.pinimg.com/236x/6e/0b/fd/6e0bfd58680cdea7699d6989e2fb7f75.jpg"
                  style={{ width: "95%", height: "auto" }}
                >
                  {/* <view>
                                        <Ionicons name="ios-arrow-back" color="#4F8EF7" size={25} style={{ position: 'absolute', top: 30, left: 10 }} />
                                    </view> */}
                </img>

                <Typography variant="body2" color="textPrimary" component="p">
                  {/* <h1>Shamila Perera</h1> */}
                  <h1>Dilini Nanayakkara</h1>
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  <p>⭐⭐⭐⭐⭐ 5.0 (827 reviews)</p>
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  <h3>
                    Hi! 👻 I am a professional artist who comes to show my
                    artwork. You can see my portfolio and I hope you will enjoy
                    it! If you have any questions do not hesitate to ask, I will
                    answer immediately! 👻
                  </h3>
                </Typography>
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
                  // defaultValue="Shamila Perera"
                  defaultValue="Dilini Nanayakkara"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  id="standard-read-only-input"
                  label="Email address:"
                  // defaultValue="shamilap@gmail.com"
                  defaultValue="dilinin@gmail.com"
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
                  label="Location:"
                  defaultValue="Kandy, Sri Lanka"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  id="standard-read-only-input"
                  label="Customized Artist (Yes / No):"
                  defaultValue="No"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <div className={classes.root_button}>
                  <Button variant="contained" color="secondary">
                    Edit
                  </Button>
                </div>
                <Grid container>
                  <Grid item xs={7}>
                    <Typography
                      style={{ marginTop: "36.5px" }}
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      <p>
                        Do you Want to register as a customized potrait artist?
                      </p>
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <div>
                      <Button
                        style={{ marginTop: "36.5px" }}
                        variant="contained"
                        fullWidth
                      >
                        Register
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
