import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faCar } from "@fortawesome/free-solid-svg-icons";
import "../css/nav-bar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light text-dark">
      <div className="container-fluid justify-content-center">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/car-market-analytics/">
                <FontAwesomeIcon icon={faTachometerAlt} className="me-2" />
                Dashboard
              </Link>
            </li>
            <span className="mx-3 text-dark">
              <b>|</b>
            </span>
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                to="/car-market-analytics/highlighted-cars"
              >
                <FontAwesomeIcon icon={faCar} className="me-2" />
                Highlighted Cars
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
