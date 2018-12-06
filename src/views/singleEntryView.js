import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import ReactQuill from "react-quill";

const Entry = props => (
  <div className="dEntry">
    <Card>
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>{props.date}</CardSubtitle>
      </CardBody>
      <CardBody>
        <CardText>
          <ReactQuill
            theme="bubble"
            value={props.diaryBody}
            placeholder="Enter your message here"
          />
        </CardText>
        <CardLink href={`/edit/${props.entry_id}`}>Edit</CardLink>
      </CardBody>
    </Card>
  </div>
);

export default Entry;
