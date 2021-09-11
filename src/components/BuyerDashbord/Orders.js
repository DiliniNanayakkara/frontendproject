import React from "react";
import { useState, useEffect } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import Title from "./Title";
import Swal from "sweetalert2";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function ApprovedOrders() {
  const classes = useStyles();

  const [click, setClick] = useState(false);
  const [orders, setApprovedOrders] = useState([]);

  const closeMobileMenu = () => setClick(false);

  const pushCart = async (id) => {
    const res = await axios.post("http://localhost:5000/setCart", {
      orderId: id,
      buyerId: localStorage.getItem("buyerId"),
    });
    Swal.fire({
      icon: "success",
      title: "Item Added !",
      showConfirmButton: true,
      timer: 1500,
    });
    // window.location.href = `/cart/${id}`;
  };
  const approvedOrders = async (id) => {
    const res = await axios.post("http://localhost:5000/approvedOrders", {
      buyerId: id,
    });
    setApprovedOrders(res.data);
  };

  useEffect(() => {
    //optional to pass id
    const buyerId = 3;
    localStorage.setItem("buyerId", buyerId);
    approvedOrders(localStorage.getItem("buyerId"));
  }, []);
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.name}</TableCell>
              <TableCell>{order.shipTo}</TableCell>
              <TableCell>Creadit Card</TableCell>
              <TableCell align="right">{order.total_price}</TableCell>
              <TableCell align="right">
                <button
                  onClick={() => {
                    pushCart(order.order_id);
                  }}
                >
                  Add to Cart
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
