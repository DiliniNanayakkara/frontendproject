import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import RegCusNavbar from '../RegCusNavbar';

const useStyles = makeStyles((theme) => ({

  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
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
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  root_button: {
    '& > *': {
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
          <RegCusNavbar/>
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
          defaultValue="Amasha"
        //   helperText="Some important text"
        />

         </Grid>
         <Grid item xs={12} sm={6}>
          
        <TextField
          id="standard-helperText"
          label="Last Name"
          defaultValue="Gamage"
        //   helperText="Some important text"
        />

         </Grid>
         
<Grid item xs={12} sm={6}>
           <TextField
            //  id="address2"
            //  name="address2"
            id="standard-helperText"
             label="Email Address"
             defaultValue="amashag@gmail.com"
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
           <TextField id="standard-helperText" label="Address:"
                                    defaultValue="195, Peradeniya, Kandy" fullWidth />
         </Grid>
         <Grid item xs={12} sm={6}>

            {/* <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div> */}

         </Grid>

       </Grid>

      {/* <div className={classes.root_button} align="center">
          <Button variant="contained" color="secondary" align="center">
              Save
          </Button>
      </div> */}

        <Grid >
            <div align="center">
                <Button style={{marginTop: '36.5px'}} variant="contained" fullWidth >
                    Save
                </Button>
            </div>
        </Grid>
        </Paper>
        {/* <Copyright /> */}
      </main>
      </div>
    </React.Fragment>
  );
}