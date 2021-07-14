import "./DashbordInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">System Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">238</span>
          <span className="featuredMoneyRate">
            +31 New Users<ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">3min ago joined last user</span>
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
          <span className="featuredMoneyRate">
          
          </span>
        </div>
        <span className="featuredSub">Include progress compared to last month</span>
      </div>
    </div>
  );
}