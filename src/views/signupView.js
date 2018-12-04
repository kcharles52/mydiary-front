import React from "react";
import { Button, FormGroup, Label } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

const SignupForm = props => (
  <div className="auth-form">
    <h1>Register for an Account </h1>
    <AvForm onValidSubmit={props.register}>
      <FormGroup className="field-wrap">
        <Label for="name">
          Full Name <span className="req">*</span>
        </Label>
        <AvField name="name" type="text" errorMessage="Invalid name" />
      </FormGroup>
      <FormGroup className="field-wrap">
      <Label for="Email">
      Email Address <span className="req">*</span>
        </Label>  
      <AvField
        name="email"
        type="email"
        required
        errorMessage="Invalid email format"
      />
      </FormGroup>
      <FormGroup className="field-wrap">
      <Label for="password"> Password
       <span className="req">*</span>
        </Label>  
      <AvField
        name="password"
        type="password"
        required
        errorMessage="Enter password"
        validate={{
          pattern: {
            value: "(?=.*[A-Z])(?=.*[a-z]).{8,}",
            errorMessage:
              "Must be minimum 8 characters including uppercase and lower case"
          }
        }}
      />
      </FormGroup>
      <FormGroup className="field-wrap">
      <Label for="password"> Confirm Password
       <span className="req">*</span>
        </Label> 
      <AvField
        name="confirm-password"
        label="Confirm Password"
        type="password"
        validate={{ match: { value: "password" } }}
        errorMessage="Password not matching"
      />
      </FormGroup>
      <Button color="primary" className="button button-block"> Get Started</Button>
      <h1 className="errors">{props.error}</h1>
    </AvForm>
    
  </div>
);

export default SignupForm;
