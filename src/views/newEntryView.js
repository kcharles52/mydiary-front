import React, { Fragment } from "react";
import { Jumbotron, Container, Button, Label, FormGroup } from "reactstrap";
import { AvField, AvForm } from "availity-reactstrap-validation";
import ReactQuill from "react-quill";


const EntryForm = props => {
  return (
    <Fragment>
      <Jumbotron>
        <Container>
        <div className="dEntry">
          <h1>Add Diary Entry</h1>
          <AvForm onValidSubmit={props.createEntry}>
            <FormGroup className="field-wrap">
            <Label> Title: <span className="req">*</span> </Label>
            <AvField
              name="diaryTitle"
              type="text"
              errorMessage="Title must be atleast 5 characters"
              validate={{
                minLength: { value: 5 }
              }}
              required
            />
            </FormGroup>
            <FormGroup className="field-wrap">
            <Label> Date: <span className="req">*</span> </Label>
            <AvField
              name="date"
              type="date"
              required
            />
            </FormGroup>
            <FormGroup className="field-wrap">
            <ReactQuill
              theme="bubble"
              value={props.entry}
              onChange={props.handleChange}
              placeholder="Enter your message here"
            />
            </FormGroup>
            <Button color="primary">Submit</Button>
          </AvForm>
          </div>
        </Container>
      </Jumbotron>
    </Fragment>
  );
};

export default EntryForm;
