import React, { useState, useEffect } from "react";

import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import axios from "axios";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  let [user, setUser] = useState("");
  const [requestList, setRequestList] = useState([]);
  let [requestid, setRequestId] = useState([]);
  let [artname, setArtname] = useState(0);
  let [location, setLocation] = useState([]);
  let [price, setPrice] = useState([]);
  let [requser, setreqUser] = useState(0);
  let [artist, setArtist] = useState([]);
  const [list, setList] = useState([]);
  const classes = useStyles();

  const [click, setClick] = useState(false);
  const [orders, setOrders] = useState([]);
  console.log(localStorage.getItem("userName"));
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    setUser(localStorage.getItem("userName"));
    axios.get(`http://localhost:5000/getOrders/${user}`).then((response) => {
      console.log(response.data);
      setRequestList(response.data);
    });
  });

  // const getOrder = async (id) => {
  //   const res = await axios.post("http://localhost:5000/getOrders", {
  //     username: id,
  //   });
  //   setOrders(res.data);
  // };

  const approvestatusUpdate = async (id) => {
    console.log(id);

    const res = await axios.post("http://localhost:5000/approvestatusUpdate", {
      request_id: id,
    });
  };

  const rejectstatusUpdate = async (id) => {
    console.log(id);

    const res = await axios.post("http://localhost:5000/rejectstatusUpdate", {
      request_id: id,
    });
  };

  // useEffect(() => {
  //   getOrder(localStorage.getItem("userName"));
  // }, []);

  console.log(orders);
  {
    list.map((list) => {
      setRequestId = list.request_id;
      setArtname = list.artname;
      setLocation = list.location;
      setPrice = list.price;
      setreqUser = list.user;
      setArtist = list.artist;
    });
  }
  return (
    <React.Fragment>
      <Title>Order Requests</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requestList.map((val) => (
            <TableRow key={val.request_id}>
              <TableCell>{val.date}</TableCell>
              <TableCell>{val.artname}</TableCell>
              <TableCell>{val.location}</TableCell>
              <TableCell>{val.status}</TableCell>
              <TableCell align="right">{val.price}</TableCell>
              <TableCell align="right">
                <button
                  onClick={() => {
                    approvestatusUpdate(val.request_id);
                  }}
                >
                  Accept
                </button>
              </TableCell>
              <TableCell align="right">
                <button
                  onClick={() => {
                    rejectstatusUpdate(val.request_id);
                  }}
                >
                  Reject
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
