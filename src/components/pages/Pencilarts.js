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
  useEffect(() => {
    Axios.get("http://localhost:5000/pencilearts").then((response) => {
      setEmployeeList(response.data);
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
              <div>
                <h3 className="artistnameg">
                  {val.first_name + val.last_name}
                </h3>
                <p className="gigp">{val.gig}​</p>
                <p>{val.first_name}</p>
                <Link>
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
              <table className="tablexx">
                <center>
                  <tr>
                    <th className="tableth">Size</th>
                    <th className="tableth">Price</th>
                  </tr>
                  <tr>
                    <td className="tabletd">24"x36"</td>
                    <td className="tabletd">$1800</td>
                  </tr>
                  <tr>
                    <td className="tabletd">24"x36"</td>
                    <td className="tabletd">$1800</td>
                  </tr>
                  <tr>
                    <td className="tabletd">24"x36"</td>
                    <td className="tabletd">$1800</td>
                  </tr>
                  <tr>
                    <td className="tabletd">24"x36"</td>
                    <td className="tabletd">$1800</td>
                  </tr>
                  <tr>
                    <td className="tabletd">24"x36"</td>
                    <td className="tabletd">$1800</td>
                  </tr>
                </center>
              </table>
              <Link to="addrow">
                <button className="button">Add</button>
              </Link>
            </p>
          </div>
        </center>
      </div>
    </div>
  );
}
