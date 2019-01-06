//react libraries
import * as React from "react";

//components
import { Input, Button } from "../common";

//interfaces
import { LoginProps } from "./interface";
export const LoginForm: React.SFC<LoginProps> = props => {
  return (
    <form action="">
      <h1>Welcome Back</h1>
      <Input
        name="email"
        type="text"
        label="Email Address *"
        value={props.email||""}
        onChange={props.onChange}
      />
      <Input
        name="password"
        label="Password *"
        type="password"
        value={props.password||""}
        onChange={props.onChange}
      />
      <Button
        label="Login"
        className="button button-block"
        onClick={()=>{props.onSubmit("login")}}
      />
    </form>
  );
};
