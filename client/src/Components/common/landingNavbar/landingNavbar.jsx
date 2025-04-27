import { Link } from "react-router-dom";
import appLogo from "../../../Asset/images/logo.jpg";
const LandingNavbar = () => {
  return (
    <header className="header" data-header>
      <div className="overlay" data-overlay></div>

      <div className="header-bottom">
        <div className="container">
          <Link
            to="/"
            className="nav-logo-link d-flex justify-content-between align-items-center"
          >
            <img className="nav-logo me-3" src={appLogo} alt="Tourly logo" />
            <h5>Travel Guide</h5>
          </Link>

          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <button
                className="nav-close-btn"
                aria-label="Close Menu"
                data-nav-close-btn
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>

            <ul className="navbar-list">
              <li>
                <a href="#home" className="navbar-link" data-nav-link>
                  home
                </a>
              </li>

              <li>
                <a href="#" className="navbar-link" data-nav-link>
                  about us
                </a>
              </li>

              <li>
                <a href="#destination" className="navbar-link" data-nav-link>
                  destination
                </a>
              </li>

              <li>
                <a href="#package" className="navbar-link" data-nav-link>
                  packages
                </a>
              </li>

              <li>
                <a href="#gallery" className="navbar-link" data-nav-link>
                  gallery
                </a>
              </li>

              <li>
                <a href="#contact" className="navbar-link" data-nav-link>
                  contact us
                </a>
              </li>
            </ul>
          </nav>

          <Link to="/tourist/signup">
            <button className="btn btn-primary">Sign Up </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default LandingNavbar;
