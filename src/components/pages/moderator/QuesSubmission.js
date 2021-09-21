import React, { useState } from "react";
/*import validate from "./validateInfo";*/
import useForm3 from "./../useForm3";
import "../../css/moderator/complainform.css";

import ModeratorNavbar from "./ModeratorNavbar";
/*
import "./../../css/QuestionForm.css";
*/
import axios from "axios";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm3(submitForm);
  const [Role, setRole] = useState("");
  const [complain, setComplain] = useState("");

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
      <ModeratorNavbar />

      <div className="form-content-right1">
        <form onSubmit={handleSubmit} className="form1" noValidate>
          <h1>Fill the form and get your doubts clear today!</h1>

          <div className="form-inputs1">
            <label className="form-label1">E-Mail</label>
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
              type="text"
              name="phone"
              placeholder="Enter your Contact Number"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && <p>{errors.phone}</p>}
          </div>

          <div className="form-inputs1">
            <label className="form-label1">User role</label>
            <div></div>

            <select
              onChange={(event) => {
                setRole(event.target.value);
              }}
              name="role"
              className="form-input1"
            >
              <option value="">- artist-</option>
              <option value="">- Buyer-</option>
            </select>
          </div>

          <div className="form-inputs1">
            <label className="form-label1">Select Complain Type</label>
            <div></div>
            <select
              onChange={(event) => {
                setComplain(event.target.value);
              }}
              name="complain"
              className="form-input1"
            >
              <option value="">- complain 1-</option>
              <option value="">- complain 2-</option>
              <option value="">- complain 3-</option>
              <option value="">- complain 4-</option>
              <option value="">- complain 5-</option>
              <option value="">- complain 6-</option>
            </select>
          </div>

          <button className="form-input-btn1" type="submit" onClick={register}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSignup;
