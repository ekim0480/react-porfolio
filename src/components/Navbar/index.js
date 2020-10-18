import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar d-flex flex-column d-sm-flex flex-sm-row navbar-expand navbar-dark bg-primary">
      <div className="d-flex flex-grow-1">
        <span className="w-100"></span>
        <Link to="/" className="navbar-brand mx-auto">
          Eddie Kim
        </Link>
        <div className="w-100"></div>
      </div>
      <div className="collapse navbar-collapse flex-grow-1 text-right">
        <ul className="navbar-nav ml-auto flex-nowrap">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
