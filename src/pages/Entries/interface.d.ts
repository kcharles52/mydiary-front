import { RouteComponentProps } from "react-router";
export interface HomeLogedInProps {
  getEntriesAction: () => Promise<any>;
  deleteEntryAction: (id:number) => Promise<any>;
  entries: any[];
  deleted:any[];
  handlesDelete: (id: number) => void;
  history?: any;
  location: {
    pathname: string;
  };
  match: {
    url: string;
  };
}

