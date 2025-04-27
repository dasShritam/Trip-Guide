import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import appLogo from "../../../Asset/images/logo.jpg";
import { useNavigate } from "react-router-dom";

export default function TouristNavbar() {
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    const value = e.target.value;
    if (value === "view-all-packages") {
      navigate("/tourist/view-packages");
    } else if (value === "view-booked-packages") {
      navigate("/tourist/booked-packages");
    } else if (value === "view-all-hotels") {
      navigate("/tourist/view-hotels");
    } else if (value === "view-booked-hotels") {
      navigate("/tourist/booked-rooms");
    } else if (value === "view-taxies") {
      navigate("/tourist/view-taxi");
    } else if (value === "request-taxi") {
      navigate("/tourist/request-taxi");
    } else if (value === "view-taxi-booking") {
      navigate("/tourist/view-taxi-booking");
    } else if (value === "view-foods") {
      navigate("/tourist/view-foods")
    }else if (value === "booked-foods") {
      navigate("/tourist/booked-foods")
    }
  };


  return (
    <div>
      <div className="container-fluid bg-dark px-9 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0"></div>
          <div className="col-lg-4 text-center text-lg-end"></div>
        </div>
      </div>
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/tourist/home" className="navbar-brand p-0">
            <h5 className="text-primary m-0 tw-flex tw-items-center tw-justify-center tw-gap-2">
              <img src={appLogo} alt="logo" className="w-25" />
              Travel Guide
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
              <Link to="/tourist/home" className="fs-6 nav-item nav-link ">
                Home
              </Link>
              <Link to="/tourist/top-destinations" className="fs-6 nav-item nav-link ">
                Destinations
              </Link>
              <select
                className="fs-6 nav-item nav-link tw-cursor-pointer tw-w-24"
                onChange={handleOptionChange}
                defaultValue=""
              >
                <option value="" disabled hidden selected>
                  {" "}
                  Hotels
                </option>
                <option
                  className="tw-cursor-pointer"
                  style={{ fontSize: "14px" }}
                  value="view-all-hotels"
                >
                  Rooms
                </option>

                <option
                  value="view-booked-hotels"
                  className="tw-cursor-pointer"
                  style={{ fontSize: "14px" }}
                >
                  Booked Rooms
                </option>
                <option
                  value="view-foods"
                  className="tw-cursor-pointer"
                  style={{ fontSize: "14px" }}
                >
                  Food
                </option>
                <option
                  value="booked-foods"
                  className="tw-cursor-pointer"
                  style={{ fontSize: "14px" }}
                >
                  Booked Foods
                </option>
              </select>

              <select
                className="fs-6 nav-item nav-link tw-cursor-pointer tw-w-20"
                onChange={handleOptionChange}
                defaultValue=""
              >
                <option value="" disabled hidden selected>
                  {" "}
                  Taxi
                </option>
                <option
                  className="tw-cursor-pointer"
                  style={{ fontSize: "14px" }}
                  value="request-taxi"
                >
                  Request
                </option>
                <option
                  className="tw-cursor-pointer"
                  style={{ fontSize: "14px" }}
                  value="view-taxi-booking"
                >
                  Booking
                </option>
              </select>

              <select
                className="fs-6 nav-item nav-link tw-cursor-pointer tw-w-28"
                onChange={handleOptionChange}
                defaultValue=""
              >
                <option value="" disabled hidden selected>
                  {" "}
                  Packages
                </option>
                <option
                  className="tw-cursor-pointer"
                  style={{ fontSize: "14px" }}
                  value="view-all-packages"
                >
                  Packages
                </option>

                <option
                  value="view-booked-packages"
                  className="tw-cursor-pointer"
                  style={{ fontSize: "14px" }}
                >
                  Booked
                </option>
              </select>

              <Link
                to="/tourist/profile"
                className="fs-6 nav-item nav-link tw-cursor-pointer"
              >
                Profile
              </Link>
              <Link
                to="/login"
                style={{ color: "red" }}
                className="fs-6 nav-item nav-link tw-text-red-800 "
              >
                Logout
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
