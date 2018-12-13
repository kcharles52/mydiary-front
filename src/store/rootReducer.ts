//third party libraries
import { combineReducers } from "redux";

//interfaces
import { Action } from '../shared.interfaces';

//reducers
import user from "./modules/user";
import entries from "./modules/entries"

//types
import { LOG_OUT_USER } from "./modules/user/types";

const appReducers = combineReducers({
  user,
  entries
});

const rootReducer = (state:any,action:Action)=>{
  switch(action.type){
    case LOG_OUT_USER:
    return{state:undefined,}
  }
  return appReducers(state,action);
}
export default rootReducer;
