import { RouteComponentProps } from "react-router";

export interface SingleEntryProps extends RouteComponentProps {
  getEntryAction: (id: string) => Promise<any>;
  deleteEntryAction: (id: string) => Promise<any>;
  fetchedEntry: { entry: object };
  match: { params: { entry_id: string } };
  history?: any;
}

export interface SingleEntryState {
  Entry: object;
}
