// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

// export default function AddressForm() {
//   return (
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom>
//         Shipping address
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="firstName"
//             name="firstName"
//             label="First name"
//             fullWidth
//             autoComplete="given-name"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="lastName"
//             name="lastName"
//             label="Last name"
//             fullWidth
//             autoComplete="family-name"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             required
//             id="address1"
//             name="address1"
//             label="Address line 1"
//             fullWidth
//             autoComplete="shipping address-line1"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             id="address2"
//             name="address2"
//             label="Address line 2"
//             fullWidth
//             autoComplete="shipping address-line2"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="city"
//             name="city"
//             label="City"
//             fullWidth
//             autoComplete="shipping address-level2"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField id="state" name="state" label="State/Province/Region" fullWidth />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="zip"
//             name="zip"
//             label="Zip / Postal code"
//             fullWidth
//             autoComplete="shipping postal-code"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="country"
//             name="country"
//             label="Country"
//             fullWidth
//             autoComplete="shipping country"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControlLabel
//             control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
//             label="Use this address for payment details"
//           />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }




import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
//import React from 'react';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import ArtistNavbar from '../ArtistNavbar';

// import AddressForm from './AddressForm';
// import PaymentForm from './PaymentForm';
// import Review from './Review';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
//   appBar: {
//     position: 'relative',
//   },
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

//const steps = ['Shipping address', 'Payment details', 'Review your order'];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <AddressForm />;
//     case 1:
//       return <PaymentForm />;
//     case 2:
//       return <Review />;
//     default:
//       throw new Error('Unknown step');
//   }
// }

export default function Artist_Profile_Edit() {



    
  const classes = useStyles();
  //const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep(activeStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep(activeStep - 1);
//   };

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar> */}
       <div className="A"> 
            <ArtistNavbar/>
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
           {/* <TextField
             required
             id="firstName"
             name="firstName"
             label="First name"
             fullWidth
             autoComplete="given-name"
           /> */}

        <TextField
          id="standard-helperText"
          label="First Name"
          defaultValue="Dilini"
        //   helperText="Some important text"
        />

         </Grid>
         <Grid item xs={12} sm={6}>
           {/* <TextField
             required
             id="lastName"
             name="lastName"
             label="Last name"
             fullWidth
             autoComplete="family-name"
           /> */}

        <TextField
          id="standard-helperText"
          label="Last Name"
          defaultValue="Nanayakkara"
        //   helperText="Some important text"
        />

         </Grid>
         {/* <Grid item xs={12}>
           <TextField
             required
             id="address1"
             name="address1"
             label="Address line 1"
             fullWidth
             autoComplete="shipping address-line1"
           />
         </Grid> */}


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
           {/* <TextField
             required
             id="city"
             name="city"
             label="City"
             fullWidth
             autoComplete="shipping address-level2"
           /> */}

        
        <TextField
          id="standard-helperText"
          label="Phone Number"
          defaultValue="0711111111"
        //   helperText="Some important text"
        />


         </Grid>
         <Grid item xs={12} sm={6}>
           <TextField id="standard-helperText" label="Location" defaultValue="Kandy, Sri Lanka" fullWidth />
         </Grid>
         <Grid item xs={12} sm={6}>
           {/* <TextField
             required
             id="zip"
             name="zip"
             label="Zip / Postal code"
             fullWidth
             autoComplete="shipping postal-code"
           /> */}

            {/* <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div> */}


         </Grid>
         {/* <Grid item xs={12} sm={6}>
           <TextField
             required
             id="country"
             name="country"
             label="Country"
             fullWidth
             autoComplete="shipping country"
           />
         </Grid>
         <Grid item xs={12}>
           <FormControlLabel
             control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
             label="Use this address for payment details"
           />
         </Grid> */}


       </Grid>





          {/* <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper> */}
          {/* <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment> */}
            {/* ) : ( */}
              {/* <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment> */}

{/* <div className={classes.root_button} align="center">
                                    <Button variant="contained" color="secondary" align="center">
                                        Save
                                    </Button>
                                </div> */}

            {/* <Grid item xs={12} sm={6}> */}
                                        <div align="center">
                                            <Button style={{marginTop: '36.5px'}} variant="contained" fullWidth >
                                                Save
                                            </Button>
                                        </div>
                                    {/* </Grid> */}
        </Paper>
        {/* <Copyright /> */}
      </main>
      </div>
    </React.Fragment>
  );
}