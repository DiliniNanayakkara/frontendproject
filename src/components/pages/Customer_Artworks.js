import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../css/Pencilarts.css";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { VideoCall } from "@material-ui/icons";
export default function Pencilarts() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_b1u1qsc",
        "template_gzjb8fr",
        e.target,
        "user_dPVAaukwy8q1IV78FQj4A"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  const [artistID, setArtworkID] = useState(
    window.location.pathname.split("/")[2]
  );

  useEffect(() => {
    setArtworkID(window.location.pathname.split("/")[2]);
  }, [window.location.pathname]);

  const [employeeList, setEmployeeList] = useState([]);
  const [employeeListy, setEmployeeListy] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:5000/Cuspencilearts/${artistID}`).then(
      (response) => {
        setEmployeeList(response.data);
      }
    );
  });
  useEffect(() => {
    Axios.get(`http://localhost:5000/getsizeArt/${artistID}`).then(
      (response) => {
        setEmployeeListy(response.data);
      }
    );
  });
  return (
    <div className="A">
      <div className=" commitionbac">
        <div className="del">
          <center>
            <h1>CUSTOM COMMITIONS</h1>
          </center>
        </div>
      </div>

      <div className="Artistgig">
        <center>
          {employeeList.map((val, key) => {
            return (
              <div>
                <h3 className="artistnameg">
                  {val.first_name + val.last_name}
                </h3>
                <p className="gigp">{val.description}​</p>
                <p>{val.first_name}</p>
              </div>
            );
          })}
        </center>
      </div>
      <div className="Artistsizes">
        <center>
          {" "}
          <div className="gigall">
            <p className="gigpx">All work is priced by size.</p>
            <p className="gigpx">
              {" "}
              Commission paintings are available in ANY dimensions.{" "}
            </p>
            ​{" "}
            <p className="gigpx"> Below is a list of commonly ordered sizes.</p>
            <p className="gigpx">
              Contact Jennifer to get a price for a specific size or for more
              information, using the form below. ​
              <table className="tablexx">
                <center>
                  <thead>
                    <th className="tableth">Size</th>
                    <th className="tableth">Price</th>
                  </thead>
                  {employeeListy.map((val, key) => {
                    return (
                      <tbody>
                        <td className="tabletd">{val.size}</td>
                        <td className="tabletd">{val.price}</td>
                      </tbody>
                    );
                  })}
                </center>
              </table>
            </p>
          </div>
        </center>
      </div>

      <div className="commiform">
        <p className="formtis">
          CUSTOM COMMISSION INQUIRY (SPECIAL FOR PENCILE ARTS):
        </p>
        <p className="Reqtext">*INDICATES REQUIRED FIELD</p>
        <form className="emailformz" onSubmit={sendEmail}>
          <lable className="formlab">NAME*</lable>
          <input className="inputfl" name="name"></input>
          <lable className="formlab">CONTACT NO*</lable>
          <input className="inputfl" type="number" name="no"></input>
          <label className="formlab">EMAIL*</label>
          <input className="inputfl" type="email" name="user_email"></input>
          <lable className="formlab">IMAGE DRIVE LINK</lable>
          <input className="inputfl" name="link"></input>
          <lable className="formlab">PHOTO </lable>
          <input className="inputfl" type="file" name="photo"></input>
          <label className="formlab">MESSAGE</label>
          <textarea className="inputflar" name="message" rows="4" />
          <input className="inputflz" type="submit" value="send"></input>
        </form>
      </div>

      <div className="samplework">
        <p className="formtis">CUSTOM COMMISSION INQUIRY:</p>
        <p className="Reqtext">*INDICATES REQUIRED FIELD</p>
        <form className="emailformz" onSubmit={sendEmail}>
          <lable className="formlab">NAME*</lable>
          <input className="inputfl" name="name"></input>
          <lable className="formlab">CONTACT NO*</lable>
          <input className="inputfl" type="phone" name="no"></input>
          <label className="formlab">EMAIL*</label>
          <input className="inputfl" type="email" name="user_email"></input>
          <lable className="formlab">IMAGE DRIVE LINK</lable>
          <input className="inputfl" name="link"></input>
          <lable className="formlab">PHOTO </lable>
          <input className="inputfl" type="file" name="photo"></input>
          <label className="formlab">MESSAGE</label>
          <textarea className="inputflar" name="message" rows="4" />
          <input className="inputflz" type="submit" value="send"></input>
        </form>
      </div>
    </div>
  );
}
