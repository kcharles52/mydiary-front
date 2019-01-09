//react libraries
import * as React from "react";

//third-party libraries
import { withRouter } from "react-router";

//interfaces
import { EntryFormProps } from "./interface";

//components
import { Input, Button, InputBox } from "../common";

//style
import "./EntryForm.scss";

export const EntryForm: React.SFC<EntryFormProps> = props => {
  return (
    <div className="EntryForm">
      <form action="">
        <h1>{props.title}</h1>
        <Input
          name="diaryTitle"
          type="text"
          label="Entry Title *"
          value={props.diaryTitle || ""}
          onChange={props.onChange}
        />
        <Input
          name="date"
          type="date"
          label="Entry Date *"
          value={props.date || ""}
          onChange={props.onChange}
        />
        <InputBox
          name="diaryEntryBody"
          textarea={true}
          label="Diary Body *"
          isDisabled={false}
          invisible={false}
          value={props.diaryBody || ""}
          onChange={props.onChange}
        />
        <div className="EntryFormButtons">
          <Button
            label="Submit"
            className="button"
            onClick={() => {
              props.onSubmit();
            }}
          />
          <a href="/home" id="cancelButton">
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};
