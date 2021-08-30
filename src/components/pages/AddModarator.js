import React, { useState } from "react";
import validate from "./validateInfo";
import useForm3 from "./useForm3";
import "../css/Form.css";
import AdminNavbar from "../AdminNavbar";

import axios from "axios";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm3(
    submitForm,
    validate
  );


  const register = () => {
    //const { handleChange, handleSubmit, values, errors } = useForm();

    axios
      .post("http://localhost:5000/register3", {
        values: values,
        // email: useForm.email,
        // password: useForm.handleChange.values.password,
        // password2: useForm.values.password2,
        // nic: useForm.values.nic,
        //values: useForm.handleChange.values(),
        // email: email,
        // password: password,
        // password2: password2,
        // nic: nic,
        // firstName: firstname,
        // lastName: lastname,
        // phone: phone,
        // photo: photo,
        // location: location,
        // description: description,
      })
      .then((response) => console.log(response));
  };
/*function Signup() {

  const [usernameReg, setUsernameReg ] = useState('')
  const [passwordReg, setPasswordReg ] = useState('')
  const [conpasswordReg, setconpasswordReg ] = useState('')
  const [nicReg, setnicReg ] = useState('')
  const [firstnameReg, setfirstnameReg ] = useState('')
  const [lastnameReg, setlastnameReg ] = useState('')
  const [ contactnumberReg, setcontactnumberReg ] = useState('')
  const [profilepicReg, setprofilepicReg ] = useState('')
  const [locationReg, setlocationReg ] = useState('')
  const [descriptionReg, setdescriptionReg ] = useState('')

  const register = ()=>{
    Axios.post('http://localhost:5000/register', {username: usernameReg , password: passwordReg, conpassword: conpasswordReg, nic: nicReg , first_name: firstnameReg, last_name: lastnameReg ,
    contact_no: contactnumberReg, profile:profilepicReg, description: descriptionReg,location: locationReg}).then((response) => {
      console.log(response);
    });
  };
*/
 
return (
  <div className="A">
    <AdminNavbar />
   
    <div className="leftside">
      <div className="circle"></div>
      <h1>
        <span>SignUp</span>
        <br />
        <span>With</span>
        <br />
        <span>Delart</span>
        <br />
        <span>Today</span>
        <br />
      </h1>
    </div>

    <div className="form-content-right1">
      <form onSubmit={handleSubmit} className="form1" noValidate>
        <h1>
          Get started with us as a Artist today! Create your account by
          filling out the information below.
        </h1>

       
     

      </form>
    </div>
  </div>
);
};

export default FormSignup;