// import "./styles.css";
import React from "react";
import AdminNavbar from '../AdminNavbar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(5),
        paddingLeft: theme.spacing(40),
        width: theme.spacing(200),
        height: theme.spacing.auto,
        paddingBottom: theme.spacing(5),
      },
    //   'center': {
    //     margin: auto,
    //     width: 60%,
    //     border: 3px solid #73AD21,
    //     padding: 10px,
    //   },
    },
  }));

const data1 = [
  {
    name: "January",
    Artists: 4000,
    Customers: 2400,
    // amt: 2400
  },
  {
    name: "February",
    Artists: 3000,
    Customers: 1398,
    // amt: 2210
  },
  {
    name: "March",
    Artists: 2000,
    Customers: 9800,
    // amt: 2290
  },
  {
    name: "April",
    Artists: 2780,
    Customers: 3908,
    // amt: 2000
  },
  {
    name: "May",
    Artists: 2780,
    Customers: 3908,
    // amt: 2000
  },
  {
    name: "June",
    Artists: 1890,
    Customers: 4800,
    // amt: 2181
  },
  {
    name: "July",
    Artists: 2390,
    Customers: 3800,
    // amt: 2500
  },
  {
    name: "August",
    Artists: 0,
    Customers: 0,
    // amt: 2100
  },
  {
    name: "September",
    Artists: 0,
    Customers: 0,
    // amt: 2100
  },
  {
    name: "October",
    Artists: 0,
    Customers: 0,
    // amt: 2100
  },
  {
    name: "November",
    Artists: 0,
    Customers: 0,
    // amt: 2100
  },
  {
    name: "December",
    Artists: 0,
    Customers: 0,
    // amt: 2100
  },
];

const data2 = [
    {
      name: "January",
      Total_orders: 5,
      // amt: 2400
    },
    {
      name: "February",
      Total_orders: 8,
      // amt: 2210
    },
    {
      name: "March",
      Total_orders: 15,
      // amt: 2290
    },
    {
      name: "April",
      Total_orders: 10,
      // amt: 2000
    },
    {
        name: "May",
        Total_orders: 10,
        // amt: 2000
      },
    {
      name: "June",
      Total_orders: 11,
      // amt: 2181
    },
    {
      name: "July",
      Total_orders: 4,
      // amt: 2500
    },
    {
      name: "August",
      Total_orders: 0,
      // amt: 2100
    },
    {
      name: "September",
      Total_orders: 0,
      // amt: 2100
    },
    {
      name: "October",
      Total_orders: 0,
      // amt: 2100
    },
    {
      name: "November",
      Total_orders: 0,
      // amt: 2100
    },
    {
      name: "December",
      Total_orders: 0,
      // amt: 2100
    },
  ];

  const data3 = [
    {
      name: "January",
      Profit: 15000,
      // amt: 2400
    },
    {
      name: "February",
      Profit: 8000,
      // amt: 2210
    },
    {
      name: "March",
      Profit: 2000,
      // amt: 2290
    },
    {
      name: "April",
      Profit: 15000,
      // amt: 2000
    },
    {
        name: "May",
        Profit: 10000,
        // amt: 2000
      },
    {
      name: "June",
      Profit: 16000,
      // amt: 2181
    },
    {
      name: "July",
      Profit: 11000,
      // amt: 2500
    },
    {
      name: "August",
      Profit: 0,
      // amt: 2100
    },
    {
      name: "September",
      Profit: 0,
      // amt: 2100
    },
    {
      name: "October",
      Profit: 0,
      // amt: 2100
    },
    {
      name: "November",
      Profit: 0,
      // amt: 2100
    },
    {
      name: "December",
      Profit: 0,
      // amt: 2100
    },
  ];


export default function App() {
    const classes = useStyles();
  return (

    <div>
        <AdminNavbar />
        <div  className={classes.root} >
        <paper style={{backgroundColor: '#ebe6e6'}} elevation={3}>
        <center><h1>User Analytics</h1></center> 
            <BarChart
                width={800}
                height={400}
                data={data1}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Customers" fill="#8884d8" />
            <Bar dataKey="Artists" fill="#82ca9d" />
            </BarChart>

            <div>
            <Button variant="contained" color="secondary">
                Download as a PDF
            </Button>
            </div>
        </paper>  
        </div>  

        <div  className={classes.root} >
        <paper style={{backgroundColor: '#ebe6e6'}} elevation={3}>
        <center><h1>Orders Summary</h1></center> 
            <BarChart
                width={800}
                height={400}
                data={data2}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Total_orders" fill="#8884d8" />
            </BarChart>

            <div>
            <Button variant="contained" color="secondary">
                Download as a PDF
            </Button>
            </div>
        </paper>  
        </div>  

        <div  className={classes.root} >
        <paper style={{backgroundColor: '#ebe6e6'}} elevation={3}>
        <center><h1>Profit Summary</h1></center> 
            <BarChart
                width={800}
                height={400}
                data={data3}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Profit" fill="#8884d8" />
            </BarChart>

            <div>
            <Button variant="contained" color="secondary">
                Download as a PDF
            </Button>
            </div>
        </paper>  
        </div>  


    </div>
  );
}
