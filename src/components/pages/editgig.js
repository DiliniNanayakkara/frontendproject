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
        <p className="formtis">UPDATE INFOR</p>
        <p className="Reqtext">*Please save this after the filling</p>
        <form className="emailformz">
          <lable className="formlab">Update Gig</lable>
          <textarea
            className="inputfxxx"
            name="name"
            placeholder="Sometimes a client or a designer has a space that cries out for a truly unique
           work of art. They will often already love my work but can’t find the perfect piece within my existing 
          collection. They need a slightly different size or particular palette of colors. I love being able to create a painting 
          that fits their specific needs. I look at it as an opportunity to collaborate and bring a vision to life using my techniques 
          and talents.​The commission process involves lots of communication to find out what the client's needs are and all the details 
          are written into a commission agreement. When the painting is getting close to completion I send photographs of the painting so 
          the client has a chance to request any changes they might want.​I ask for a deposit of 50% to begin and the balance is due upon 
          shipping or delivery of the completed painting.​It's an exciting process that I truly enjoy. I invite you to reach out to me to 
          discuss your vision for your space."
          ></textarea>

          <input className="inputflxx" type="submit" value="send"></input>
        </form>
      </div>

      <div className="sideim">
        <img
          className="sideimm"
          src="https://media.istockphoto.com/illustrations/painting-illustration-id165738115?k=6&m=165738115&s=170667a&w=0&h=1-uTmRXMn1rJiO0Ow8_ljqVNsrJTJdcv-eXhhSa7EJw="
        ></img>
      </div>
    </div>
  );
}
