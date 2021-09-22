import React, { useEffect, useState } from "react";
import validate from "./validateInfo";
import useForm3 from "./useForm3";
import "../css/editprofile.css";
import { Link } from "react-router-dom";

import Axios from "axios";
export default function Artist_Profile_Edit() {
  const [email, setemail] = useState("");
  const [artist_id, setId] = useState(0);
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");

  const [employeeList, setEmployeeList] = useState([]);
  useEffect(() => {
    let email = localStorage.getItem("userName");
    Axios.get("http://localhost:5000/pencileartsz/" + email).then(
      (response) => {
        setEmployeeList(response.data);
      }
    );
  });

  const addEmployee = () => {
    Axios.post("http://localhost:5000/addrow", {
      email: email,
      artist_id: artist_id,
      size: size,
      price: price,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          email: email,
          artist_id: artist_id,
          size: size,
          price: price,
        },
      ]);
    });
  };

  return (
    <div>
      <div className="backclass">
        <Link to="/pencilarts">
          {" "}
          <btton className="Back">BACK</btton>
        </Link>
      </div>
      {employeeList.map((val, key) => {
        return (
          <div className="samplework">
            <p className="formtis">ADD MORE PRICES</p>
            <p className="Reqtext">*Please save this after the filling</p>
            <form className="emailformz">
              <lable className="formlab">Email</lable>
              <input
                className="inputfl"
                defaultValue={val.email}
                name="name"
                onChange={(event) => {
                  setemail(event.target.value);
                }}
              ></input>
              <lable className="formlab">Artist_Id</lable>
              <input
                className="inputfl"
                defaultValue={val.artist_id}
                name="name"
                onChange={(event) => {
                  setId(event.target.value);
                }}
              ></input>
              <lable className="formlab">Size</lable>
              <input
                className="inputfl"
                name="name"
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              ></input>
              <lable className="formlab">Price</lable>
              <input
                className="inputfl"
                name="number"
                placeholder="Rs:"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              ></input>
              <button className="button" onClick={addEmployee} value="send">
                ADD
              </button>
            </form>
          </div>
        );
      })}
      <div className="sideim">
        <img
          className="sideimm"
          src="https://media.istockphoto.com/illustrations/painting-illustration-id165738115?k=6&m=165738115&s=170667a&w=0&h=1-uTmRXMn1rJiO0Ow8_ljqVNsrJTJdcv-eXhhSa7EJw="
        ></img>
      </div>
    </div>
  );
}
