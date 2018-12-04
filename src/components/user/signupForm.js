import React, { Component } from "react";
import loginAction from "../../actions/user/loginAction";
import { connect } from "react-redux";
import SignUpAction from "../../actions/user/signupAction";
import SignupForm from "../../views/signupView";

export class Signup extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    if (nextProps.register === 201) {
      nextProps.loginAction(this.state);
    }
    if (nextProps.status) {
      localStorage.setItem("token", nextProps.token);
      this.props.history.push("/home");
    }
  }
  handleRegistration = (event, values) => {
    this.setState(values);
    this.props.SignUpAction(values);
  };
  render() {
    return (

        <SignupForm
          register={this.handleRegistration}
          error={this.props.error}
        />

    );
  }
}
const mapStateToProps = state => ({
  register: state.userReducer.status,
  status: state.userReducer.isLoggedIn,
  token: state.userReducer.user.Token,
  error: state.userReducer.error
});
export default connect(
  mapStateToProps,
  { SignUpAction, loginAction }
)(Signup);
