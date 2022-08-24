import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/service">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <Link class="navbar-brand fw-bolder fs-4 mx-auto" to="/">
              Company
            </Link>
            {props.auth ? (
              <>
                <Link
                  to="/login"
                  className="btn btn-outline-primary ms-auto rounded-pill"
                >
                  <i className="fa fa-sign-in me-2" />
                  Login
                </Link>

                <Link
                  to="/register"
                  className="btn btn-outline-primary ms-2 rounded-pill"
                >
                  <i className="fa fa-user-plus me-2" />
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="btn btn-outline-primary ms-2 rounded-pill ms-auto"
                >
                  <i className="fa fa-user-plus me-2" />
                  Dashboard
                </Link>
                <Link
                  to="/logout"
                  className="btn btn-outline-primary ms-2 rounded-pill"
                >
                  <i className="fa fa-sign-out me-2" />
                  Logout
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
