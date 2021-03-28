import React from "react";

import { Link, useLocation } from "react-router-dom";

import "./navbar.css";

export default function Navbar() {
  let location = useLocation();

  return (
    <div className="nav-cont">
      <nav>
        <div className="nav-wrapper">
          <div className="col s12">
            <Link to="/" className="breadcrumb">
              Home
            </Link>
            {location.pathname === "/users" ? (
              <Link to="/users" className="breadcrumb">
                Users
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
