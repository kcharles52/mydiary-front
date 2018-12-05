import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const Entries = props => (
  
  <div className="dEntry">
    <Card>
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>{props.date}</CardSubtitle>
      </CardBody>
      <CardBody>
        <CardText>
          {props.diaryBody}
        </CardText>
        <CardLink href={`/edit/${props.entry_id}`}>Edit</CardLink>
        <CardLink href={`/delete/${props.entry_id}`}>Delete</CardLink>
      </CardBody>
    </Card>
  </div>
);

export default Entries;
