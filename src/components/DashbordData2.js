import "./DashbordData.css";

import { useState, useEffect } from "react";
import Axios from "axios";

  
export default function WidgetLg() {

  const [email, setemail] = useState("");
  const [first_name, setfirst] = useState("");
  const [last_name, setlast] = useState("");
  const [contact_no, setcontact] = useState("");
  const [nic, setnic] = useState("");

  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/Allartist").then((response) => {
      setEmployeeList(response.data);
    });
  });
  return(
    <div>
    
 

    <div className="widgetLg">
      <center><p className="titlem">Artist Details</p></center>
<center>
  
        <table className="Artist">
          <thead>
        <tr>
    <th>Email</th>
    <th>First_name</th>
    <th>Last_name</th>
    <th>Contact_no</th>
    <th>User_role</th>
    <th>NIC</th>
  </tr>  </thead>
  {employeeList.map((val, key) => {
    return (
  <tbody>
  <tr>
    <td>{val.email}</td>
    <td>{val.first_name}</td>
    <td>{val.last_name}</td>
    <td>{val.contact_no}</td>
    <td>{val.user_role}</td>
    <td>{val.nic}</t

          <div className="widgetSmUser">
            <span className="widgetSmUsername">Cristo Nish</span>
            <span className="widgetSmUserTitle">Artist</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View Profile
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://www.adobe.com/express/create/media_141efea30cca217e8cb7fb3abb8ed9d663c29d550.jpeg?width=2000&format=webply&optimize=medium"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Nikky Lukar</span>
            <span className="widgetSmUserTitle">Buyer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View Profile
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://www.seoclerk.com/pics/000/940/831/8181ae714a9bb3412c55aad793795c16.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Egan Shami</span>
            <span className="widgetSmUserTitle">Artist</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View Profile
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg?size=626&ext=jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Buyer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View Profile
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Lukar Nish</span>
            <span className="widgetSmUserTitle">Artist</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View Profile
          </button>
        </li>
      </ul>
    </div>
  );
}
