import React from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "assets/images/Logo.svg";
import { Link } from "react-router-dom";
import Search from "components/Search/Search";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <Logo />
      </Link>
      <Search />
    </div>
  );
}

export default Navbar;
