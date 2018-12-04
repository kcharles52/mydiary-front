import React, { Component } from "react";
import IndexPage from "../views/LandingView";
import NavBar from "./common/navBar";
import Footer from "./common/footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <IndexPage {...this.props}/>
        <Footer />
      </div>
    );
  }
}
