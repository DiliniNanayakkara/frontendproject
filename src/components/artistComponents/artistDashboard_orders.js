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
  const classes = useStyles();

  const [click, setClick] = useState(false);
  const [orders, setOrders] = useState([]);
  console.log(localStorage.getItem("userName"));
  const closeMobileMenu = () => setClick(false);

  
  useEffect(() => {
    setUser(localStorage.getItem("userName"));
    axios.get(`http://localhost:5000/getOrders/${user}`)
    .then((response) => {
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

  const statusUpdate = async (id) => {
    console.log(id);
    const res = await axios.post("http://localhost:5000/statusUpdate", {
      request_id: id,
    });
  };

  // useEffect(() => {
  //   getOrder(localStorage.getItem("userName"));
  // }, []);

  console.log(orders);
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
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
                    statusUpdate(val.request_id);
                  }}
                >
                  Accept
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
