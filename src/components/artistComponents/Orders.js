import React, { useState, useEffect } from 'react';
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import axios from "axios";
// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const getOrders = (Id) => {
  axios.get("http://localhost:5000/getOrders").then((responce) => {
    console.log("success");
    return responce.data;
  });
};
const rows = [];
const orders = getOrders(0);
console.log("hubaaa", orders);
// for (let i = 0; i < orders.data.length; i += 1) {
//   rows.push(
//     createData(
//       i,
//       orders.date,
//       orders.name,
//       orders.shipTo,
//       orders.paymentMethod,
//       orders.amount
//     )
//   );
// }

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();

  const [orderList, setOrderList] = useState([]);
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);
  useEffect(() => {
    axios.get("http://localhost:5000/getOrders").then((response) => {
      setOrderList(response.data);
    });
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
          {orderList.map((val) => {
            <TableRow key={val.Id}>
              <TableCell>{val.date}</TableCell>
              <TableCell>{val.name}</TableCell>
              <TableCell>{val.shipTo}</TableCell>
              <TableCell>{val.paymentMethod}</TableCell>
              <TableCell align="right">{val.amount}</TableCell>
            </TableRow>;
          })}
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
