import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../css/Pencilarts.css";
import ArtistNavbar from "../ArtistNavbar";
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

  const [employeeList, setEmployeeList] = useState([]);
  const [employeeListy, setEmployeeListy] = useState([]);
  useEffect(() => {
    let email = localStorage.getItem("userName");
    Axios.get("http://localhost:5000/pencilearts/" + email).then((response) => {
      setEmployeeList(response.data);
    });
  });
  useEffect(() => {
    let email = localStorage.getItem("userName");
    Axios.get("http://localhost:5000/getsize/" + email).then((response) => {
      setEmployeeListy(response.data);
    });
  });
  return (
    <div className="A">
      <ArtistNavbar />

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
              <div key={key}>
                <h3 className="artistnameg">
                  {val.first_name + val.last_name}
                </h3>
                <p className="gigp">{val.description}​</p>
                <p>{val.first_name}</p>
                <Link to="editgig">
                  {" "}
                  <button className="button">Edit Info</button>
                </Link>
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
              <center>
                <table className="tablexx">
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
                </table>
              </center>
              <div className="btn">
                <Link to="/addrow">
                  <button variant="contained" className="button">
                    ADD
                  </button>
                </Link>
              </div>
            </p>
          </div>
        </center>
      </div>
    </div>
  );
}
