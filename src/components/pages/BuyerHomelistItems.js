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
import { NavLink, Route } from "react-router-dom";

export const mainListItems = (
  <div>
    <NavLink
      to="./c_home"
      activeStyle={{
        fontWeight: "normal",
        color: "black",
      }}
    >
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </NavLink>

    <NavLink
      to="/customer_home"
      activeStyle={{
        fontWeight: "normal",
        color: "black",
      }}
    >
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>
    </NavLink>

    <NavLink
      to="./customer_exhibitions"
      activeStyle={{
        fontWeight: "normal",
        color: "black",
      }}
    >
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Exhibitions" />
      </ListItem>
    </NavLink>
  </div>
);

export const secondaryListItems = (
  <div>
    {/*<ListSubheader inset>Saved reports</ListSubheader>*/}
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Help Center" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Complaint" />
    </ListItem>
  </div>
);
