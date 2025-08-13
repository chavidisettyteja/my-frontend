import React from 'react';

function SubNavbar() {
  return (
    <div
      className="Subnav-head"
      style={{
        backgroundColor: "white",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        boxShadow: "0 6px 10px -4px rgba(0, 0, 0, 0.2)",
       
        zIndex: 999
      }}
    >
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav" style={{ gap: '2rem' }}>

              {/* Prices */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Prices
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">0 - 50L</a></li>
                  <li><a className="dropdown-item" href="#">50L - 1CR</a></li>
                </ul>
              </li>

              {/* BHKs */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  BHKs
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">1 BHK</a></li>
                  <li><a className="dropdown-item" href="#">2 BHK</a></li>
                  <li><a className="dropdown-item" href="#">3 BHK</a></li>
                </ul>
              </li>

              {/* Places */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Places
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Kukatpally</a></li>
                  <li><a className="dropdown-item" href="#">Narsingi</a></li>
                  <li><a className="dropdown-item" href="#">Kokapet</a></li>
                </ul>
              </li>

              {/* Plots */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Plots
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Commercial</a></li>
                  <li><a className="dropdown-item" href="#">Residential</a></li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SubNavbar;
