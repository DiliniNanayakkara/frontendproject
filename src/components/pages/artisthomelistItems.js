import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import StarIcon from "@material-ui/icons/Star";
import SendIcon from "@material-ui/icons/Send";
import ImageIcon from "@material-ui/icons/Image";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { useHistory } from "react-router-dom";
import { Link } from "@material-ui/core";
import { NavLink, Route } from "react-router-dom";

export const mainListItems = (
  <div>
    <NavLink
      to="./Artist_profile"
      activeStyle={{
        fontWeight: "normal",
        color: "black",
      }}
    >
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText secondary="BACK" />
      </ListItem>
    </NavLink>
    <NavLink
      to="./orders"
      activeStyle={{
        fontWeight: "normal",
        color: "black",
      }}
    ></NavLink>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText secondary="ORDERS" />
    </ListItem>
    {/*}  <NavLink
      to="./portofolio"
      activeStyle={{
        fontWeight: "normal",
        color: "black",
      }}*/}

    {/*  <ListItem button>
        <ListItemIcon>
          <ImageIcon />
        </ListItemIcon>
        <ListItemText primary="portofolio" />
      </ListItem>
   </NavLink>*/}
    <NavLink
      to="./Artworkupload"
      activeStyle={{
        fontWeight: "normal",
        color: "black",
      }}
    >
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText secondary="UPLOAD ARTWORKS" />
      </ListItem>
    </NavLink>
    <NavLink
      to="./createexhibition"
      activeStyle={{
        fontWeight: "normal",
        color: "black",
      }}
    >
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText secondary="CREATE EXHIBITION" />
      </ListItem>
    </NavLink>
  </div>
);

export const secondaryListItems = (
  <div>{/*<ListSubheader inset>Saved reports</ListSubheader>*/}</div>
);
