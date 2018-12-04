import React, { Component, Fragment } from "react";
import LoginForm from "./loginForm";

//forms
class FormBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTab: true
    };

  }


  // toggling() {
  //   this.setState(prevState => ({
  //     displayTab: !prevState.toggle
  //   }));
  // }

  render() {
    return (
      <Fragment>
        <div id="login"  style={{}}>
          <LoginForm {...this.props} />
        </div>
        <div
          id="signup"
          display={this.state.display}
        >
          <p>Register</p>
        </div>
      </Fragment>
    );
  }
}

export default FormBox;
