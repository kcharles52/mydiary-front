//react libraries
import * as React from "react";

//interfaces
import { InputProps } from "./interfaces";

export const Input: React.StatelessComponent<InputProps> = props => {
  return (
    <div className={formatWrapperClass(props)}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="field">
        <input
          type={props.type}
          name={props.name}
          className="form-control"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
      <div className="help-block">{props.error}</div>
    </div>
  );
};

const formatWrapperClass = (props: InputProps) => {
  const wrapperClass = "form-group";

  return props.error ? `${wrapperClass} has-error` : wrapperClass;
};


