import React from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "assets/images/Logo.svg";
import { Link } from "react-router-dom";
import Search from "components/Search/Search";

function Navbar(props) {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <Logo />
      </Link>
      <Link to="/base-search">
        <Search focus={props.focus} />
      </Link>
    </div>
  );
}

export default Navbar;
