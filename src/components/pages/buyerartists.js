import { useState, useEffect } from "react";
import Axios from "axios";
import { userData } from "../../dummyData";
import "../css/viewartist.css";
import RegCusNavbar from "../RegCusNavbar";
import { Link } from "react-router-dom";
export default function Artists() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/Artistlista").then((response) => {
      setEmployeeList(response.data);
    });
  });
  return (
    <div className="home">
      <RegCusNavbar />
      {employeeList.map((val, key) => {
        return (
          <div className="artistcard">
            <div className="profileInfo">
              <img
                className="profphoto"
                src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
              ></img>
              <div className="profdata">
                <h3>{val.first_name + val.last_name}</h3>

                <p>{val.email}</p>
                <p>{val.description}</p>

                <p>{val.contact_no}</p>

                <div className="buttonz">
                  <Link to={`/BuyerArtistProf/${val.artist_id}`}>
                    {" "}
                    <button>VIEW PROFILE</button>
                  </Link>
                </div>
              </div>
              {/**profdata */}
            </div>
            {/**profileInfo */}
          </div>
        );
      })}
    </div>
  );
}
