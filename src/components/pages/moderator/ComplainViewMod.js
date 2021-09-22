/*import React, { useState, useEffect } from "react";
import ModeratorNavbar from "./ModeratorNavbar";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../../components/pages/moderator/ViewComplain.css";

export default function AddItem() {
  let [user, setUser] = useState("");
  let [complain, setComplain] = useState("");
  let [complainId, setComplainId] = useState("");
  let [complainStatus, setComplainStatus] = useState("");

  const [click, setClick] = useState(false);
  const [complainList, setComplainList] = useState([]);

  const closeMobileMenu = () => setClick(false);
  /* console.log(localStorage.getItem("user"));*/
/*
  useEffect(() => {
    axios.get("http://localhost:5000/pendingcomplain").then((response) => {
      console.log(response);
      setComplainList(response.data);
    });
  }, []);

  const takeAction = () => {
    axios
      .post("http://localhost:5000/takeaction", {
        complainId: setComplainId,
        complainStatus: setComplainStatus,
      })

      .then(() => {
        console.log("success");
      });
  };

  return (
    <div>
      <ModeratorNavbar />
      <h1 className="header_1">Pending Complaints</h1>
      <div className="outer_div">
        <table>
          <thead>
            <tr className="table_row">
              <th className="th1">E- Mail</th>
              <th className="th1">First Name</th>
              <th className="th1">Last Name</th>
              <th className="th1">Phone</th>
              <th className="th1">Complaint</th>
              <th className="th1">Status</th>
              <th className="th1">Action</th>
            </tr>
          </thead>
        </table>
        {complainList.map((val) => {
          return (
            <table>
              <tr>
                <td className="td2">{val.email}</td>
                <td className="td2">{val.firstname}</td>
                <td className="td2"> {val.lastname}</td>
                <td className="td2">{val.phone}</td>
                <td className="td2">{val.role}</td>
                <td className="td2">{val.complain}</td>
                <td className="td2">{val.status}</td>
                <td className="td2">{val.action}</td>
                <td className="td2 ">
                  <button className="update-btn" onClick={takeAction}>
                    Update
                  </button>
                </td>
              </tr>
            </table>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/modeHome" onClick={closeMobileMenu}>
        <button>
          <i class="fa fa-arrow-left" aria-hidden="true"></i> Back
        </button>
      </Link>
      <Link to="/addNewItem" onClick={closeMobileMenu}>
        <button> Add New Itwm</button>
      </Link>
    </div>
  );
}
*/

import "../../../components/DashbordData.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ModeratorNavbar from "./ModeratorNavbar";
import "../../../components/css/moderator/ItemTable.css";

export default function WidgetLg() {
  let [user, setUser] = useState("");
  let [complain, setComplain] = useState("");
  let [complainId, setComplainId] = useState("");
  let [complainStatus, setComplainStatus] = useState("");

  const [click, setClick] = useState(false);
  const [complainList, setComplainList] = useState([]);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  useEffect(() => {
    axios.get("http://localhost:5000/pendingcomplain").then((response) => {
      console.log(response);
      setComplainList(response.data);
    });
  }, []);

  const takeAction = () => {
    axios
      .post("http://localhost:5000/takeaction", {
        complainId: setComplainId,
        complainStatus: setComplainStatus,
      })

      .then(() => {
        console.log("success");
      });
  };

  return (
    <div>
      <ModeratorNavbar />
      <div className="widgetLg">
        <center>
          <p className="titlem">Pending Complaints</p>
        </center>
        <center>
          <table className="Artist">
            <thead>
              <tr>
                <th>Email</th>
                <th>First_name</th>
                <th>Last_name</th>
                <th>Contact_no</th>
                <th>User_role</th>
                <th>Complaint</th>
              </tr>{" "}
            </thead>
            {complainList.map((val, key) => {
              return (
                <tbody>
                  <tr>
                    <td>{val.email}</td>
                    <td>{val.first_name}</td>
                    <td>{val.last_name}</td>
                    <td>{val.contact_no}</td>
                    <td>{val.user_role}</td>
                    <td>{val.complain}</td>
                    <td>
                      <button className="update-btn" onClick={takeAction}>
                        Checked
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </center>
      </div>
    </div>
  );
}
