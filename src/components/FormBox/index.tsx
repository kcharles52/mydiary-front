//react libraries
import * as React from "react";

//third-party libraries
import { connect } from "react-redux";
import * as ReactTooltip from "react-tooltip";

//Interfaces
import { FormBoxProps, FormBoxState } from "./interfaces";

//components
import { LoginForm } from "../Form/LoginForm/LoginForm";
import { RegisterForm } from "../Form/RegisterForm/RegisterForm";

//thunks (action creater)
import { loginUser, registerUser } from "../../store/modules/user";

export class FormBox extends React.Component<FormBoxProps, FormBoxState> {
  DefaultState = {
    Signup: false,
    user: { name: "", email: "" }
  };

  state = { ...this.DefaultState };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.isLoggedIn) {
      localStorage.setItem("token", nextProps.user.user.token);
      this.props.history.push("/home");
    }
  }
  /**
   * This method handles what happens when the name value changes in the input field.
   *
   * @param {Event} event
   *
   * @returns {void}
   */
  HandleInputChange = (event): void => {
    let name, value;
    name = event.target.name;
    value = event.target.value;
    this.setState(prevState => {
      return { user: { ...prevState.user, [name]: value } };
    });
  };

  /**
   * This method handles what happens when the user submits a form.
   *
   * @param {formName} Form
   *
   * @returns {void}
   */
  HandleSubmit = (form: string) => {
    if (form === "login") {
      this.props.loginUserAction(this.state.user);
    }
    if (form === "signUp") {
      this.props.registerUserAction(this.state.user);
      window.location.replace("/");
    }
  };

  //This function is used to toggle between the login and register tabs
  DisplayForm = () => {
    let display;
    if (this.state.Signup) {
      display = (
        <RegisterForm
          {...this.state.user}
          onChange={this.HandleInputChange}
          onSubmit={this.HandleSubmit}
        />
      );
    } else {
      display = (
        <LoginForm
          {...this.state.user}
          onChange={this.HandleInputChange}
          onSubmit={this.HandleSubmit}
        />
      );
    }

    return display;
  };

  ToggleTab = (choice: boolean) => {
    if (choice) {
      this.setState(prevState => {
        return { ...prevState, Signup: choice };
      });
    } else {
      this.setState(prevState => {
        return { ...prevState, Signup: choice };
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="tab-group">
          <div
            onClick={() => {
              this.ToggleTab(false);
            }}
            className="tab"
          >
            <a href="#login">Log In</a>
          </div>
          <div
            onClick={() => {
              this.ToggleTab(true);
            }}
            className="tab"
          >
            <a href="#signup">Register</a>
          </div>
        </div>

        <div className="tab-content">
          <div>{this.DisplayForm()}</div>
          <div />
        </div>
      </React.Fragment>
    );
  }
}
export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  loginUserAction: userData => dispatch(loginUser(userData)),
  registerUserAction: userData => dispatch(registerUser(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormBox);
