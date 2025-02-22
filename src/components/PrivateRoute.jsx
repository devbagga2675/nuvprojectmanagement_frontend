import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const PrivateRoute = () => {
  const user = useAuth();
  console.log(user.isLoggedIn)
  if (!user.isLoggedIn) return <Navigate to="/signin" />;
  return <Outlet />;
};

export default PrivateRoute;
