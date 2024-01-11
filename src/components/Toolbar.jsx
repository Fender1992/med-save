import React from "react";
import "./toolbar.css";
import logo from "../assets/hospital-logo.png";

export default function Toolbar() {
  return (
    <div id="toolbar">
      <img src={logo} id="hospital-logo" />
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <div id="toolbar-items">
          <div id="home">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </div>
          <div id="about-us">
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
          </div>
          <div id="dropdown">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </div>
          <div id="buttons">
            <button id="login">Login</button>
            <button id="user">Create a user</button>
          </div>
        </div>
      </ul>
    </div>
  );
}
