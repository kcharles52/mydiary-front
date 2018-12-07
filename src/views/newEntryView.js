import React, { Fragment } from "react";
import { Jumbotron, Container, Button, Label, FormGroup } from "reactstrap";
import { AvField, AvForm } from "availity-reactstrap-validation";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";

const EntryForm = props => {
  let { createEntry, title, entry } = props;
  return (
    <Fragment>
      <Jumbotron>
        <Container>
          <div className="dEntry">
            <h1>{title}</h1>
            <AvForm onValidSubmit={createEntry}>
              <FormGroup className="field-wrap">
                <Label>
                  {" "}
                  Title: <span className="req">*</span>{" "}
                </Label>
                <AvField
                  value={entry.diaryTitle}
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
                <Label>
                  {" "}
                  Date: <span className="req">*</span>{" "}
                </Label>
                <AvField value={entry.date} name="date" type="date" required />
              </FormGroup>
              <FormGroup className="field-wrap">
                <ReactQuill
                  theme="bubble"
                  value={entry.diaryBody}
                  onChange={props.handleChange}
                  placeholder="Enter your message here"
                />
              </FormGroup>
              <Button color="primary">Submit</Button>
              <Link to="/home">
                <Button color="primary">Cancel</Button>
              </Link>
            </AvForm>
          </div>
        </Container>
      </Jumbotron>
    </Fragment>
  );
};

export default EntryForm;
