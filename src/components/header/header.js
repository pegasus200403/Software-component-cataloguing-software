import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link className="title" to="/dashboard">
          Software Component Cataloguing Software
        </Link>

        <div className="btns">
          <Link to="/add-component">+ Add Component</Link>
          <Link to="/">Logout</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
