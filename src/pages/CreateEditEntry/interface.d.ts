import { RouteComponentProps } from "react-router";

export interface CreatEditEntryProps {
  Edit: boolean;
  title: string;
  diaryTitle: string;
  date: string;
  diaryBody: string;
  onSubmit: () => void;
  onChange: (fieldName: string, value: string) => void;
  addEntryAction: (data: Object) => Promise<any>;
  editEntryAction: (data: Object, entryId: string) => Promise<any>;
  getEntryAction: (entryId: string) => Promise<any>;
  match: { params: { entry_id: string } };
  editEntry: { entry: object };
  newEntry: object;
  history?: any;
  location: {
    pathname: string;
  };
  match: {
    url: string;
  };
}
export interface EntriesState {
  Entry: object;
  Edit: boolean;
  isLoading: boolean;
}
