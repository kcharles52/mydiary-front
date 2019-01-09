import React, { Component } from "react";
import IndexPage from "../views/LandingView";
import NavBar from "./common/navBar";
import Footer from "./common/footer";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaytab: ""
    };
  }

  loginTab = () => {
    this.setState(prevState => ({
      displaytab: "login"
    }));
  };
  SignupTab = () => {
    this.setState(prevState => ({
      displaytab: "Signup"
    }));
  };

  render() {
    return (
      <div>
        <NavBar />
        <IndexPage
          login={this.loginTab}
          signup ={this.SignupTab}
          display={this.state.displaytab}
          {...this.props}
        />
        <Footer />
      </div>
    );
  }
}
