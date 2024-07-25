/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { DataContext } from './DataProvider/DataProvider';

const ProtectedRoute = ({ children, msg, redirect = "/auth" }) => {
  const [{ user }] = useContext(DataContext);

  console.log("ProtectedRoute accessed:", user);

  if (!user) {
    alert(msg);
    return <Navigate to={redirect} />;
  }

  return children;
};

export default ProtectedRoute;
