import { Person } from "modules/user/interfaces";
import { History } from "history";

export interface FormBoxProps {
  loginUserAction: (userData: Person) => Promise<any>;
  registerUserAction: (userData: Person) => Promise<any>;
  HandleInputChange?: (fieldName: string, value: string) => void;
  HandleSubmit?: () => void;
  history: History;
}

export interface FormBoxState {
  user: object;
  Signup: boolean;
  Email?: string;
  Password?: string;
}
