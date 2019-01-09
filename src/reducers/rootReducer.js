import { combineReducers } from "redux";
import userReducer from "./userReducer";
import entriesReducer from "./entriesReducer";

const reducers = combineReducers({
  userReducer,
  entriesReducer
});

export default reducers;
