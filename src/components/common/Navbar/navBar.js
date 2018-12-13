import React, { Component, Fragment } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
  NavLink,
  NavbarToggler,
  Nav
} from "reactstrap";
import { authService } from "../../../utils/auth";
export class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const isLoggedIn = authService.isAuthenticated;
    return (
      <Fragment>
        <Navbar color="primary" light expand="md">
          <NavbarBrand href="/home">My Diary</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse navbar isOpen={this.state.isOpen}>
            <Nav className="ml-auto" navbar hidden={!isLoggedIn}>
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/addEntry">Create Journel</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" onClick={authService.logoutUser}>
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
export default NavigationBar;
