import { GET_ENTRIES, ADD_ENTRY} from "../actions/actionTypes";

const initialState = {
    entries:[],
    new:{}
}; 
export default function entriesReducer(state = initialState, action) {
  switch (action.type) {
  case GET_ENTRIES:
    return {
      ...state,
      entries:action.payload.entries,
    };
  case ADD_ENTRY:
  return {
    ...state,
    new:action.payload,
  };
  default:
    return state;
  }
}
