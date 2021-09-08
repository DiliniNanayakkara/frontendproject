import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashbord from "../pages/Dashbord";
import ArtistDashbord from "../pages/ArtistDashbord";
import BuyerDashbord from "../pages/BuyerDashbord";

export default function Roles() {
  const [role, setRole] = useState("");
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:5000/login").then((response) => {
      if (response.data.loggedIn == true) {
        setRole(response.data.user[0].user_role);
      }
    });
  }, []);

  return (
    <div>
      {role == "artist" && <ArtistDashbord />}
      {role == "customer" && <BuyerDashbord />}
    </div>
  );
}
