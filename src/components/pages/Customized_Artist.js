import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import '../../App.css';
import ArtistNavbar from '../ArtistNavbar';

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
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(http://webtoolfeed.files.wordpress.com/2012/09/d397fdef8c6f550673831e192c881ae0-d4yxzcl1.jpg)',
    //   backgroundImage: 'url(https://afremov.com/var/images/product/250.280/image_2320.jpeg)',
    //   backgroundImage: 'url(https://source.unsplash.com/random)',
    
      
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


export default function Customized_Artist() {
    const classes = useStyles();
  
    return (

      <>
          <ArtistNavbar/>
      

       
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            {/* <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography component="h1" variant="h5">
              Customized Portrait Artist Registration Form
            </Typography>
            <form className={classes.form} noValidate>
            <h3>Artist Id:</h3>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="artist_id"
                label="Artist Id"
                name="artist_id"
                autoComplete="artist_id"
                autoFocus
              />
              <h3>Artwork Price:</h3>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="artwork_price"
                label="Artwork Price"
                type="artwork_price"
                id="artwork_price"
                // autoComplete="current-password"
              />
              <h3>Price for each additional face:</h3>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="additional_face_price"
                label="Price for each additional face in art"
                name="additional_face_price"
                autoComplete="additional_face_price"
                // autoFocus
              />
              <h3>Framework Price:</h3>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="framework_price"
                label="Framework Prices"
                name="framework_price"
                autoComplete="framework_price"
                // autoFocus
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Register
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                {/* <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid> */}
              </Grid>
              <Box mt={5}>
                
              </Box>
            </form>
          </div>
        </Grid>
       </Grid>

       </>
    );
  }