import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";
import loader from "../../images/giphy.gif";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="min-h-full flex justify-center items-center">
        <div>
          <img src={loader} alt="" />
        </div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
