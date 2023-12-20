import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const MenuNavbar = () => {
  return (
    <>
      <div className="container" style={{ background: "#0D1127" }}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <nav className="navbar navbar-expand-lg ">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link mx-2" style={{ color: "#fff" }}>
                      Home <span class="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link mx-2" style={{ color: "#fff" }}>
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link mx-2" style={{ color: "#fff" }}>
                      Course
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link mx-2" style={{ color: "#fff" }}>
                      Staff
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link mx-2" style={{ color: "#fff" }}>
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link mx-2" style={{ color: "#fff" }}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 d-flex justify-content-end">
            <label>
              <span className="screen-reader-text">Search for...</span>

              <input
                type="search"
                className="search-field"
                placeholder="Search"
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuNavbar;
