//react libraries
import * as React from "react";

//third-party libraries
import { Link } from "react-router-dom";
import { authService } from "../../../utils/auth";

//styles
import "./navbar.scss";

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className="header">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white"
        id="navbar"
      >
        <a className="navbar-brand" href="/">
          MyDiary
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/home">
                {"Home "}
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/addEntry">
                {"Create Journel "}
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/" onClick={authService.logoutUser}>
                {"Logout "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
