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
import ReactQuill from "react-quill";


export const Entries = props => (
  
  <div className="dEntryH ">
    <Card>
      <CardBody>
        <Link to={`entry/${props.entry_id}`}>
        <CardTitle className="CardTitle">{props.title}</CardTitle>
        </Link>
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
        <CardLink onClick={()=>{props.delete(props.entry_id)}}>Delete</CardLink>
      </CardBody>
    </Card>
  </div>
);

export default Entries;
