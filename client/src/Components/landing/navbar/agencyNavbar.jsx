import { Link } from "react-router-dom";
import appLogo from "../../../Asset/images/logo.jpg";
import "./agencyNavbar.scss";
const AgencyNavbar = () => {
  return (
    <div id="agency-navbar">
      <header className="header" data-header>
        <div className="header-bottom">
          <div className="container">
            <Link
              to="/agency/home"
              className="nav-logo-link d-flex justify-content-between align-items-center"
            >
              <img className="nav-logo me-3" src={appLogo} alt="Tourly logo" />
              <h5>Travel Guide</h5>
            </Link>
            <ul className="d-flex agent-nav-links">
              <li>
                <Link to="/agency/home" className=" navbar-link" data-nav-link>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/agency/add-package" className="navbar-link" data-nav-link>
                  Add Package
                </Link>
              </li>
              <li>
                <Link to="/agency/view-tourists" className="navbar-link" data-nav-link>
                  View Tourists
                </Link>
              </li>
              <li>
                <Link to="/agency/view-bookings" className="navbar-link" data-nav-link>
                  View Bookings
                </Link>
              </li>
            </ul>

            <Link to="/login">
              <button className="btn btn-danger">Log Out </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AgencyNavbar;
