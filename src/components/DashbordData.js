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
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  useEffect(() => {
    Axios.get("http://local
          <td className="widgetLgUser">
            <img
              src="https://ssc98hsc00.com/uploads/user/340558.jpeg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mark Mexdo</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">27</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
     
    <div className="widgetLg">
      <center><p className="titlem">Saff Details</p></center>
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
    <td>{val.nic}</td>
  </tr>
 
  </tbody>
    );
  })}

        </table>

        </center>