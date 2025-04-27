import React from "react";
import { Link } from "react-router-dom";
import appLogo from "../../Asset/images/logo.jpg";
import styles from "./authNavbar.module.scss";
function LandingNavbar() {
  return (
    <div id={styles.landingNavbar}>
      <div className="container-fluid bg-dark px-9 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0"></div>
          <div className="col-lg-4 text-center text-lg-end"></div>
        </div>
      </div>
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h5 className="text-primary m-0 tw-flex tw-align-middle">
              <img src={appLogo} alt="logo" className="w-25" />
              <span className="tw-flex tw-align-middle mt-2">Travel Guide</span>
            </h5>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="fs-6 nav-item nav-link ">
                Home
              </Link>
              <Link to="/about" className="fs-6 nav-item nav-link">
                About
              </Link>
              <div className="nav-item dropdown">
                <Link
                  href="#"
                  className="nav-link dropdown-toggle fs-6"
                  data-bs-toggle="dropdown"
                >
                  Regsiter
                </Link>
                <div className="dropdown-menu m-0 fs-6">
                  <Link to="/tourist/signup" className="dropdown-item">
                    Tourist
                  </Link>
                  <Link to="/agency/signup" className="dropdown-item">
                    Agency
                  </Link>
                  <Link to="/hotel/signup" className="dropdown-item">
                    Hotel
                  </Link>
                  <Link to="/taxi/signup" className="dropdown-item">
                    Taxi
                  </Link>
                </div>
              </div>
              <div className="fs-6 align-self-center">
                <Link to="/login" className="fw-bold fs6 dropdown-item">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default LandingNavbar;
