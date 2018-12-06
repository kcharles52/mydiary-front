import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { Link } from "react-router-dom";


const Entries = props => (
  
  <div className="dEntryH ">
    <Card>
      <CardBody>
        <Link to={`entry/${props.entry_id}`}>
        <CardTitle>{props.title}</CardTitle>
        </Link>
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
