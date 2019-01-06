//react libraries
import * as React from "react";

//interfaces
import { EntryProps } from "./interface";

//style
import "./entry.scss";

export const Entry: React.StatelessComponent<EntryProps> = props => {
  return (
    <React.Fragment>
      <div className="DiaryCard">
        <div className="DiaryCardHeader">
          <a href={`/Entry/${props.entry_id}`}><h2>{props.diaryTitle}</h2></a>
          <h3>Diary date: {props.date} </h3>
        </div>
        <div className="DiaryCardBody">{props.diaryEntryBody}</div>
        <div className="DiaryCardButtons">
          <button onClick={() => props.edit(props.entry_id)}>Edit</button>
          <button onClick={() => props.delete(props.entry_id)}>Delete</button>
        </div>
      </div>
    </React.Fragment>
  );
};
