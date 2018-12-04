import React from "react";
import PropTypes from "prop-types";
import { Button, FormGroup, Label } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

export const LoginView = (props)=>{
  LoginView.propTypes = {
    login: PropTypes.func
  }; 
  let {login} = props;
  return(
    <div id="login">
      <h2>Welcome Back!</h2>
      <AvForm onValidSubmit={login}>
        <FormGroup className="field-wrap">
            <Label for="Email">Email Address <span className="req">*</span></Label>
            <AvField name="email" type="email" required />
        </FormGroup>
        <FormGroup className="field-wrap">
            <Label for="examplePassword">Password <span className="req">*</span></Label>
            <AvField name="password" type="password" required />
        </FormGroup>
        <Button id="Login" className="button button-block" > LOG IN </Button>

      </AvForm>
    </div>
  );

};

export default LoginView;
