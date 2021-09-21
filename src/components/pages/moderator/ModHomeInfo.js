import React from "react";
import "./ModHomebtns.css";
import { Link } from "react-router-dom";

export default function ModHomeInfo() {
  return (
    <center>
      <div className="upperdiv"> </div>
      <div></div>
      <div className="container">
        <div>
          <Link to="/complaints">
            <button className="helpcenterbtn">Manage Art Tools</button>
          </Link>
        </div>

        <div>
          <Link to="/helpcenter">
            <button className="helpcenterbtn">Help Center</button>
          </Link>
        </div>

        <div>
          <Link to="reports">
            <button className="helpcenterbtn">Reports</button>
          </Link>
        </div>

        <div>
          <Link to="advertiesment">
            <button className="helpcenterbtn">Manage Advertiesment</button>
          </Link>
        </div>
      </div>
    </center>
  );
}
