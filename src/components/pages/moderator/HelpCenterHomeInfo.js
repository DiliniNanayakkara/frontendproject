import React from "react";
import "./HelpCenterHomeInfo.css";
import { Link } from "react-router-dom";
import { Button } from "../../Button";

export default function HelpCenterHomeInfo() {
  return (
    <center>
      <div className="upperdiv"> </div>
      <div></div>
      <h1 className="helpwelcom">Welcome to De 'lart Help Center</h1>
      <div className="helpcontainer">
        <div></div>

        <div className="">
          <div>
            <Link to="questionsubmitform">
              <button className="helpbtnsubmit">How Can we help you ?</button>
            </Link>
          </div>
        </div>

        <div>
          <Link to="/fnq">
            <button className="helpbtnsubmit">FAQs</button>
          </Link>
        </div>
      </div>
    </center>
  );
}
