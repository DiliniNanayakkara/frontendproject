import React from "react";
import { Redirect, Route } from "react-router-dom";

let isLoggedIn = false;

function AutherizeRoute({ component: Component, ...rest }) {
  let token = localStorage.getItem("token");

  isLoggedIn = token != null ? true : false;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default AutherizeRoute;
