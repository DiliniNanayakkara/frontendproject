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

        <div className="form-inputs1">
          <label className="form-label1">User Name</label>
          <input
            className="form-input1"
            type="email"
            name="email"
            placeholder="Enter your email for the username"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs1">
          <label className="form-label1">Password</label>
          <input
            className="form-input1"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs1">
          <label className="form-label1">Confirm Password</label>
          <input
            className="form-input1"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

      
        <div className="form-inputs1">
          <label className="form-label1">First Name</label>
          <input
            className="form-input1"
            type="text"
            name="firstname"
            placeholder="Enter your First Name"
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>
        <div className="form-inputs1">
          <label className="form-label1">Last Name</label>
          <input
            className="form-input1"
            type="text"
            name="lastname"
            placeholder="Enter your Last Name"
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>

        <div className="form-inputs1">
          <label className="form-label1">Contact Number</label>
          <input
            className="form-input1"
            type="number"
            name="phone"
            placeholder="Enter your Contact Number"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
         <div className="form-inputs1">
          <label className="form-label1">Profile picture</label>

          <input
            className="form-input1"
            type="file"
            name="photo"
            placeholder="(.png or .jpg or .jpeg)"
            value={values.profile}
            onChange={handleChange}
          />

          {errors.profile && <p>{errors.profile}</p>}
        </div> 
        <div className="form-inputs1">
          <label className="form-label1">NIC</label>
          <input
            className="form-input1"
            type="number"
            name="nic"
            placeholder="Enter your NIC"
            value={values.nic}
            onChange={handleChange}
          />
          {errors.nic && <p>{errors.nic}</p>}
        </div>
        <div className="form-inputs1">
          <label className="form-label1">User role</label>
          <input
            className="form-input1"
            type="text"
            name="role"
            placeholder="Enter your Location Details"
            value={values.role}
            onChange={handleChange}
          />
        </div>
     

      
      </form>
    </div>
  </div>
);
};

export default FormSignup;