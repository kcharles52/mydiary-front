//react libraries
import * as React from "react";

//components
import { Input, Button } from "../common";

//interfaces
import { RegisterProps } from "./interfaces";
export const RegisterForm: React.SFC<RegisterProps> = props => {
  return (
    <form action="">
      <h1>Register for an account</h1>
      <Input
        name="name"
        type="text"
        label="Full Name *"
        value={props.name ||""}
        onChange={props.onChange}
      />
      <Input
        type="text"
        name="email"
        label="Email Address *"
        value={props.email||""}
        onChange={props.onChange}
      />
      <Input
        type="password"
        name="password"
        label="Password *"
        value={props.password||""}
        onChange={props.onChange}
      />
      <Input
        type="password"
        name="ConfirmPassword"
        label="Confirm Password *"
        value={props.ConfirmPassword||""}
        onChange={props.onChange}
      />
      <Button
        label="Get started"
        className="button button-block"
        onClick={()=>{props.onSubmit("signUp")}}
      />
    </form>
  );
};
