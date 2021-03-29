import React, { useContext } from "react";

import { Link, useLocation } from "react-router-dom";
import { LangContext } from "../../contexts/LangContext";

import "./navbar.css";

export default function Navbar() {
  let location = useLocation();

  const { lang } = useContext(LangContext);

  return (
    <div className="nav-cont">
      <nav>
        <div className="nav-wrapper">
          <div className="col s12">
            <Link to="/" className="breadcrumb">
              {lang === "tr" ? "Anasayfa" : "Home"}
            </Link>
            {location.pathname === "/users" ? (
              <Link to="/users" className="breadcrumb">
                {lang === "tr" ? "Kullanıcılar" : "Users"}
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
