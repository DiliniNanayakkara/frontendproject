import React from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import '../../App.css';


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
      backgroundImage: 'url(https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/Web-design-vs-web-de.jpg?auto=format&q=60&w=1860&h=1860&fit=crop&crop=faces)',
    
    
      
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
       

       
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            {/* <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography component="h1" variant="h5">
              Create Exhibition
            </Typography>
            <form className={classes.form} noValidate>
            <h3>ArtistId:</h3>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="ArtistId"
                label="ArtistId"
                name="ArtistId"
                autoComplete="ArtistId"
                autoFocus
              />
              <h3>Category type:</h3>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="Category type"
                label="Category type"
                type="Category type"
                id="Category type"
                // autoComplete="current-password"
              />
               <h3>Add Images:</h3>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="Add Images"
                label="Add Images"
                type="Add Images"
                id="Add Images"
                // autoComplete="current-password"
              />
              <button>choose files</button>
              <h3>Publish Date: </h3>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Publish Date"
                label="Publish Date"
                name="Publish Date"
                autoComplete="Publish Date"
                // autoFocus
              />
              <h3>Ticket Price:</h3>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Ticket Price"
                label="Ticket Price"
                name="Ticket Price"
                autoComplete="Ticket Price"
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
                Create Exhibitions
              </Button>
              <Grid container>
               
                 <Grid item>
                 
                </Grid> 
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