//third party libries
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";

import reducers from "./rootReducer";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunk))
);
export default store;
