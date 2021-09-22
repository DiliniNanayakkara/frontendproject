import React, { useState, useEffect } from "react";
import "../../css/moderator/complainform.css";
import ModeratorNavbar from "./ModeratorNavbar";
import useForm3 from "./../useForm3";
/*
import "./../../css/QuestionForm.css";
*/
import axios from "axios";

export default function ComplainUpload() {
  const [file, setfile] = useState(null);
  const [complainUpload, setComplainUpload] = useState([]);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [complain, setComplain] = useState("");

  const addComplain = () => {};
  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", file);
    formData.append("email", email);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phone", phone);
    formData.append("role", role);
    formData.append("complain", complain);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post("http://localhost:5000/sendcomplain", formData, config)
      .then((response) => {
        alert("complaint send sucessfully!");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const onInputChange = (e) => {
    setfile(e.target.files[0]);
    setComplainUpload(e.target.value);
  };

  const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm3(
      submitForm
      /* validate*/
    );
    let date = new Date();
    console.log(date);
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
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
              />
            </div>

            <div className="form-inputs1">
              <label className="form-label1">First Name</label>
              <input
                className="form-input1"
                type="text"
                name="firstname"
                placeholder="Enter your First Name"
                value={values.firstname}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
                required
              />
            </div>
            <div className="form-inputs1">
              <label className="form-label1">Last Name</label>
              <input
                className="form-input1"
                type="text"
                name="lastname"
                placeholder="Enter your Last Name"
                value={values.lastname}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
                required
              />
            </div>

            <div className="form-inputs1">
              <label className="form-label1">Contact Number</label>
              <input
                className="form-input1"
                type="text"
                name="phone"
                placeholder="Enter your Contact Number"
                value={values.phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                required
              />
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

            <button
              className="form-input-btn1"
              type="submit"
              onSubmit={onFormSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
}
