import "./DashbordInfo.css";
import { useState, useEffect } from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function FeaturedInfo() {
  const [employeeListx, setEmployeeListx] = useState([]);
  const [employeeListy, setEmployeeListy] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/ArtistList").then((response) => {
      setEmployeeListx(response.data);
    });
  });
  useEffect(() => {
    Axios.get("http://localhost:5000/orderlist").then((response) => {
      setEmployeeListy(response.data);
    });
  });
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">System Users</span>
        <div className="featuredMoneyContainer">
          {employeeListx.map((val, key) => {
            return <span className="featuredMoney">{val.count}</span>;
          })}
          {/*Status eka eka wena ewagen panding orders ganna puluwn wei*/}
        </div>
      </div>
      {/*order table eken count ekath me wageema ganna*/}

      <div className="featuredItem1">
        <span className="featuredTitle">Orders</span>
        <div className="featuredMoneyContainer">
          {employeeListy.map((val, key) => {
            return <span className="featuredMoney">{val.count}</span>;
          })}
        </div>
      </div>
      <div className="featuredItem2">
        <span className="featuredTitle"></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Reports</span>

          <span className="featuredMoneyRate">
            <div>
              <Link to="/admin_reports">
                {/* <button className="buttonreport">View Reports</button> */}
              </Link>
            </div>
          </span>
        </div>

        <button className="repobtn">View Report</button>
      </div>
    </div>
  );
}
