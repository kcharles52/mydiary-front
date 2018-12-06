import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const Entry = props => (
  
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
      </CardBody>
    </Card>
  </div>
);

export default Entry;
