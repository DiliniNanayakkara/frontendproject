import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

//import { userData } from "../../dummyData";
import ArtistNavbar from "../ArtistNavbar";
import MessageWindow from "../messageComponent/MessageWindow";

export default function Artists() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  const [artistList, setArtistList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/artists").then((response) => {
      setArtistList(response.data);
      // if (artistList.first_name == "Dilini") {
      //   let path = "artistsmessage";
      // }
    });
  }, []);

  return (
    <div className="home">
      <ArtistNavbar />

      <div>
        <div className="widgetLg">
          <center>
            <p className="titlem">Artist List</p>
          </center>
          <center>
            <table className="Artist">
              <thead>
                <tr>
                  <th>Artist Name</th>
                  <th>Artworks</th>
                  <th>Chat with Me</th>
                  {/* <th>Contact_no</th>
                  <th>User_role</th>
                  <th>NIC</th> */}
                </tr>{" "}
              </thead>
              {artistList.map((val, key) => {
                return (
                  <tbody>
                    <tr>
                      <td>{val.first_name + " " + val.last_name}</td>
                      <td>
                        <div>
                          <button>View</button>
                        </div>
                      </td>
                      <td>
                        <div>
                          <Link to="artistsmessage">
                            <button>Chat</button>
                          </Link>
                        </div>
                      </td>
                      {/* <td>{val.contact_no}</td>
                      <td>{val.user_role}</td>
                      <td>{val.nic}</td> */}
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </center>
        </div>
      </div>
    </div>
  );
}
