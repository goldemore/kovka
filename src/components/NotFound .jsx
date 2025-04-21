import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/">Return to home </Link>
    </div>
  );
};

export default NotFound;
