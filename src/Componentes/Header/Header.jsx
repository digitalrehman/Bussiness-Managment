import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  const [showNav, setShowNav] = React.useState(false);

  const handleToggleNav = () => {
    setShowNav((prevState) => !prevState);
  };

  return (
    <>
      <nav className="navbar bg-primary p-2 shadow">
        <div className="container-fluid bg-primary">
          <Link
            className="navbar-brand fs-3 bg-primary fw-bold text-light"
            to="/"
          >
            Adil Brothers
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleNav}
          >
            <span className="navbar-toggler-icon bg-primary"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${showNav ? "show" : ""}`}
            id="navbarCollapse"
          >
            <ul className="navbar-nav me-auto bg-primary mb-2 mb-lg-0">
              <li className="nav-item bg-primary">
                <NavLink
                  to="/"
                  className="nav-link text-light fw-bold text-decoration-none me-4"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item bg-primary">
                <NavLink
                  to="/Mirpurkhas"
                  className="nav-link text-light fw-bold text-decoration-none me-4"
                >
                  Mipurkhas
                </NavLink>
              </li>

              <li className="nav-item bg-primary">
                <NavLink
                  to="/Karachi"
                  className="nav-link text-light fw-bold text-decoration-none me-4"
                >
                  Karachi
                </NavLink>
              </li>

              <li className="nav-item bg-primary">
                <NavLink
                  to="/Debit"
                  className="nav-link text-light fw-bold text-decoration-none me-4"
                >
                  Debits
                </NavLink>
              </li>

              <li className="nav-item bg-primary">
                <NavLink
                  to="/Balance"
                  className="nav-link text-light fw-bold text-decoration-none me-4"
                >
                  Balance
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
