import React, { Component, Fragment } from "react";
import LoginForm from "./loginForm";
import SingupForm from "./signupForm";

//forms
class FormBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTab: "false"
    };
  }

  tab = choice => {
    let display;
    choice==="Signup"? display= <SingupForm {...this.props} />: display =<LoginForm {...this.props}/>;
    return display
  };
  render() {
    return (
      <Fragment>
        <div>
          {this.tab(this.props.display)}
        </div>
        <div />
      </Fragment>
    );
  }
}

export default FormBox;
