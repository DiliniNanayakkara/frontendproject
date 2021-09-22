import React, { useState, useEffect } from "react";
import "../../css/moderator/complainform.css";
import ModeratorNavbar from "./ModeratorNavbar";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ComplaintHandle() {
  const [click, setClick] = useState(false);

  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [complaint, setComplaint] = useState("");
  const [status, setStatus] = useState("");
  const [action, setAction] = useState("");

  const closeMobileMenu = () => setClick(false);

  /*
  useEffect(() => {
   
    axios.get(`http://localhost:5000/sendcomplaint`).then((response) => {
      console.log(response.data);
      setComplaintList(response.data);
    });
  });*/

  const onFormSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/sendcomplaint", {
        email: email,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        role: role,
        complaint: complaint,
        /*  status: status,
        action: action,*/
      })
      .then((response) => {
        alert("Complaint send Successfully");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  // {customerList.map((val) => {
  //   setFirstName = val.first_name;
  //   console.log(val.first_name);
  // })}
  // {customerList.map((val) => {

  console.log(firstname);
  console.log(lastname);
  console.log(phone);
  console.log(role);

  return (
    <div className="A">
      <ModeratorNavbar />
      <br />
      <br />
      <form className="form1" onSubmit={onFormSubmit}>
        <div class="delivery-header">
          <h1>Fill the form and get your doubts clear today!</h1>
        </div>
        <div class="form-content-right1">
          <div class="horizontal-group">
            <div class="delivery-group left">
              <label for="firstname" class="delivery-title">
                E- Mail *
                <input
                  type="text"
                  name="email"
                  class="form-input1"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  placeholder="enter your first name"
                  required="required"
                />
              </label>
            </div>
            <div class="form-inputs1">
              <label for="firstname" class="form-label1">
                First name *
                <input
                  type="text"
                  name="firstname"
                  class="form-input1"
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                  placeholder="enter your first name"
                  required="required"
                />
              </label>
            </div>

            <div class="form-inputs1">
              <label for="lastname" class="form-label1">
                Last name
              </label>
              <input
                type="text"
                name="lastname"
                class="form-input1"
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
                placeholder="enter your last name"
              />
            </div>
          </div>
          <div class="form-inputs1p">
            <label for="phone" class="form-label1">
              Contact Number
            </label>
            <input
              type="number"
              name="phone"
              class="form-input1"
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              placeholder="enter your phone number"
              required="required"
            />
          </div>

          <div class="form-inputs1p">
            <div class="delivery-group left">
              <label for="role" class="form-label1">
                Select the Role *
              </label>
              <input
                type="text"
                name="role"
                class="form-input1"
                onChange={(event) => {
                  setRole(event.target.value);
                }}
                placeholder="enter your role"
                required="required"
              />
            </div>
            <br />

            <div class="form-inputs1p">
              <label for="complaint" class="form-label1">
                type your complaint
              </label>
              <input
                type="text"
                name="complaint"
                class="form-input1"
                onChange={(event) => {
                  setComplaint(event.target.value);
                }}
                placeholder="type your complaint"
                required="required"
              />

              <br />
            </div>
            <button
              className="form-input-btn1"
              type="submit"
              onClick={onFormSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      <div className="footer">
        <div className="footercard">
          <h1>De'lart</h1>
          <h3>Contact Us</h3>
          <p>Contact Us</p>
          <p>Legal Notices</p>
          <p>General Terms and Conditions</p>
          <p>My Profile</p>
          <p>Help Center</p>
          <p>Call: +119876677</p>
          <p>Emails:delart@gmail.com</p>
        </div>
        <div className="footercard">
          <h3>Who are we</h3>
          <p>About Us</p>
          <p>Our Artists</p>
          <p>Exibitions</p>
          <p>Contact</p>
          <p>Our PRoducts</p>
        </div>
        <div className="footercard">
          <h3>Are you an Artist</h3>
          <p>How to join Delart</p>
          <p>Login for Artist</p>
          <p>Art Gallery</p>
          <h3>Are you an Buyer</h3>
          <p>How to join Delart</p>
          <p>Login for Buyer</p>
          <p>Art Gallery</p>
          <p>Artists</p>
        </div>
        <div className="footercard">
          <h3>Sign Up</h3>
          <p>
            Artist can usr this system for sell their Artworks.Buyers can
            purches Artworks. First SignUp ! it's Free!
          </p>
          <center>
            <div className="fbutton">SignUp</div>
          </center>
        </div>
      </div>
    </div>
  );

  // })}
}
