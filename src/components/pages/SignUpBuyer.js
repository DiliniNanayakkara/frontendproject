import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "../css/Form.css";
import Navbar from "../Navbar";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const register = () => {
    axios
      .post("http://localhost:5000/register2", {
        values: values,
      })
      .then((response) => console.log(response));
  };

  return (
    <div className="A">
      <Navbar />
      <div className="formbtn">
        <ul className="selectrole">
          <li className="role">
            <a href="signup">Artist</a>
          </li>
          <li className="role">
            <a href="BuyerSignUp">Buyer</a>
          </li>
        </ul>
      </div>
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
            Get started with us as Buyer today! Create your account by filling
            out the information below.
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
            <label className="form-label1">Address</label>
            <input
              className="form-input1"
              type="text"
              name="location"
              placeholder="Enter your Location Details"
              value={values.location}
              onChange={handleChange}
            />
          </div>

          <button className="form-input-btn1" type="submit" onClick={register}>
            Sign up
          </button>
          <span className="form-input-login1">
            Already have an account? Login <a href="/login">here</a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default FormSignup;
