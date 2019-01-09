//react libraries
import * as React from 'react';

//interfaces
import { BProps } from "./interfaces";

export const Button: React.StatelessComponent<BProps> = (props) => {

  return (
    <button type="button"
      className={props.className}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};
