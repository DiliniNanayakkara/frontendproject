import "./DashbordInfo.css";
import { useState, useEffect } from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Axios from "axios";
export default function FeaturedInfo() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/ArtistList").then((response) => {
      setEmployeeList(response.data);
    }

    );
  })

  
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">System Users</span>
        <div className="featuredMoneyContainer">
        {employeeList.map((val, key) => {
          return(
          <span className="featuredMoney">{val.count}</span>
        
          );})}
          {/*Status eka eka wena ewagen panding orders ganna puluwn wei*/}
          <span className="featuredMoneyRate">
            +3 New Users<ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">3min ago joined last user</span>
      </div>
      {/*order table eken count ekath me wageema ganna*/}

        </div>
        <span className="featuredSub">3min ago joined last user</span>
      </div>
      <div className="featuredItem1">
        <span className="featuredTitle">Orders</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">34</span>
          <span className="featuredMoneyRate">
            -2 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
         <div className="featuredItem1">
        <span className="featuredTitle">Orders</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">34</span>
          <span className="featuredMoneyRate">
          -2 <ArrowDownward className="featuredIcon negative"/>
          </span> 
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem2">
        <span className="featuredTitle"></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Reports</span>
        
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
        <span className="featuredSub">
          Include progress compared to last month
        </span>
      </div>
      
    </div>
  );
}
