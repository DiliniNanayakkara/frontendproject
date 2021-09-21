import React, { useEffect, useState } from "react";
import validate from "./validateInfo";
import useForm3 from "./useForm3";
import "../css/editprofile.css";
import { Link } from "react-router-dom";

import Axios from "axios";
export default function Artist_Profile_Edit() {
  return (
    <div>
      <div className="backclass">
        <Link to="/pencilarts">
          {" "}
          <btton className="Back">BACK</btton>
        </Link>
      </div>

      <div className="samplework">
        <p className="formtis">ADD MORE PRICES</p>
        <p className="Reqtext">*Please save this after the filling</p>
        <form className="emailformz">
          <lable className="formlab">Size</lable>
          <input className="inputfl" name="name"></input>
          <lable className="formlab">Price</lable>
          <input className="inputfl" name="number" placeholder="Rs:"></input>
          <input className="inputflxx" type="submit" value="send"></input>
        </form>
      </div>

      <div className="sideim">
        <img
          className="sideimm"
          src="https://img.freepik.com/free-vector/blogging-illustration-concept-with-characters-writing-article-smartphone_269730-121.jpg?size=338&ext=jpg"
        ></img>
      </div>
    </div>
  );
}
