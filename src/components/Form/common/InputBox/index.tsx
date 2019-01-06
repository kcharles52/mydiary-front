// react libraries
import * as React from "react";

// styles
import "./InputBox.scss";

// interfaces
import { InputBoxProps } from "./interfaces";

// helper functions
import classNameFormatter from "../../../../utils/helpers/classNameFormatter";

export const InputBox: React.SFC<InputBoxProps> = ({
  error,
  showTextOnError,
  isDisabled,
  textarea,
  invisible,
  onChange,
  ...props
}) => {
  const classes = classNameFormatter({
    "input-box-group__textarea-control": textarea,
    "input-box-group__control": !textarea,
    "input-box-group__control--error": Boolean(error),
    "input-box-group__control--disabled": isDisabled,
    "input-box-group__control--not-visible": invisible
  });

  return (
    <div
      className={classNameFormatter(
        {
          "input-box-group": true,
          "input-box-group--error": Boolean(error)
        },
        props.className
      )}
    >
      {!textarea ? (
        <input
          {...props}
          className={classes}
          disabled={isDisabled}
          onChange={onChange}
        />
      ) : (
        <textarea
          onChange={onChange}
          {...props}
          className={classes}
          disabled={isDisabled}
        />
      )}
      {error && showTextOnError && (
        <span className="input-box-group__control__error-text">{error}</span>
      )}
    </div>
  );
};

InputBox.defaultProps = {
  type: "text",
  value: "",
  textarea: false,
  showTextOnError: true,
  invisible: false
};

export default InputBox;
