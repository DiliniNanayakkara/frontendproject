import React from "react";
import { useState, useEffect } from "react";
// import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import Title from "./Title";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

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
  let [user, setUser] = useState("");
  let [id, setId] = useState("");
  let [art, setArt] = useState("");
  let [location, setLocation] = useState("");
  let [price, setPrice] = useState("");
    
  const [orderList, setOrderList] = useState([]);
  const [pendingList, setPendingList] = useState([]);
  const [rejectedList, setRejectedList] = useState([]);

  useEffect(() => {
    setUser(localStorage.getItem("user"));
    axios.get(`http://localhost:5000/confirmed/${user}`)
    .then((response) => {
           console.log(response.data);
           setOrderList(response.data);
    });
  });

  useEffect(() => {
    setUser(localStorage.getItem("user"));
    axios.get(`http://localhost:5000/pending/${user}`)
    .then((response) => {
           console.log(response.data);
           setPendingList(response.data);
    });
  });

  useEffect(() => {
    setUser(localStorage.getItem("user"));
    axios.get(`http://localhost:5000/rejected/${user}`)
    .then((response) => {
           console.log(response.data);
           setRejectedList(response.data);
    });
  });
  
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

  const AddArtworkCart = () => {
    setUser = localStorage.getItem("user");
    axios
      .post("http://localhost:5000/artworkcart", {
        user: setUser,
        art: setArt,
        location: setLocation,
        price: setPrice,
        
        
      })
      .then(() => {
        alert('Request sent to artist');
      });
    }

  return (
    <React.Fragment>
      <Title>Approved Order Requests</Title>
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
          {orderList.map((order) => (
            setId = order.request_id,
            setArt = order.artname,
            setLocation = order.location,
            setPrice = order.price,
            <TableRow key={order.request_id}>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.artname}</TableCell>
              <TableCell>{order.location}</TableCell>
              <TableCell>Creadit Card</TableCell>
              <TableCell align="right">{order.price}</TableCell>
              <TableCell align="right">
              <Link
                              to='/artworkcart'
                              onClick={AddArtworkCart}
                          ><button className="continue">  View Cart       
                          </button> 
                          </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table><br/><br/><br/><br/>
      <Title>Pending Order Requests</Title>
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
          {pendingList.map((val) => (
            <TableRow key={val.request_id}>
              <TableCell>{val.date}</TableCell>
              <TableCell>{val.artname}</TableCell>
              <TableCell>{val.location}</TableCell>
              <TableCell>Creadit Card</TableCell>
              <TableCell align="right">{val.price}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table><br/><br/><br/><br/>
      <Title>Rejected Order Requests</Title>
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
          {rejectedList.map((val) => (
            <TableRow key={val.request_id}>
              <TableCell>{val.date}</TableCell>
              <TableCell>{val.artname}</TableCell>
              <TableCell>{val.location}</TableCell>
              <TableCell>Creadit Card</TableCell>
              <TableCell align="right">{val.price}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
    
  );
}
