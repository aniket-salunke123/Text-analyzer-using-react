import React from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";


export default function Header(props) {
  return (
    <div>
      <div className="App">
        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {props.title} 
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              
                
              </ul>
              <div className={`d-flex me-4 form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input type="text" className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.changeMode} />
                        <label htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode === 'light' ? 'dark' : 'light'} mode`}</label>
                    </div>
              {/* <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
{/* This is comment */}
        {/* End of navbar */}
      </div>
    </div>
  );
}