import React, { useState } from "react";
import validate from "./validateInfo";
import useForm3 from "./useForm3";
import "../css/editprofile.css";
import { Link } from 'react-router-dom';

import axios from "axios";

const FormSignup = ({ submitForm }) => {
 
 
return (
  <div>
    <div className="backclass">
   <Link to="/Artist_profile"> <btton className="Back">BACK</btton></Link>
    </div>
 <div className="samplework"> 
 
          <p className="formtis">UPDATE YOUR PROFILE DATA</p>
          <p className="Reqtext">*Please save this after the filling</p>
            <form className="emailformz">
                  <lable className="formlab">FIRST NAME</lable>
                  <input className = "inputfl" name="name" placeholder="Dilini"></input>
                  <lable className="formlab" >LAST NAME</lable>
                  <input className = "inputfl" name="name" placeholder="Nanayakkara"></input>
                  <lable className="formlab">CONTACT NO</lable>
                  <input className = "inputfl" type="number" name="no" placeholder="0776565656"></input>
                  <lable className="formlab">ADDRESS </lable>
                  <input className = "inputfl" type="file" name="photo" placeholder="Ambalangoda, Sri Lanka"></input>
                  <label className="formlab">DESCRIPTION</label>
                  <textarea  className = "inputflar"  name="message" rows='4' placeholder="Hi! ???? I am a professional artist who comes to
                   show my artwork. You can see my portfolio and I hope you will enjoy it! If you have any questions do 
                   not hesitate to ask, I will answer immediately! ????"/>
                  <input className = "inputflxx" type="submit" value="send"></input>

            </form>
            
          </div>
          <div className="sideim">
          {/** <img src="https://media.istockphoto.com/vectors/vector-illustration-of-kid-painting-his-friend-on-canvas-vector-id947440478?k=20&m=947440478&s=612x612&w=0&h=EwOccEu9oLFZRyW4JGWLRP309JQ0Knile26tjanI2w4="></img> */} 
          <img className="sideimm" src="https://media.istockphoto.com/vectors/vector-illustration-of-kid-painting-his-friend-on-canvas-vector-id947440478?k=20&m=947440478&s=612x612&w=0&h=EwOccEu9oLFZRyW4JGWLRP309JQ0Knile26tjanI2w4="></img>
          </div>

  </div>
  
);
};

export default FormSignup;