import React from "react";
import { shallow } from "enzyme";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../../reducers/rootReducer";
import EntriesFormView from "../../views/newEntryView";

export const store = createStore(rootReducer, applyMiddleware(thunk));

it("renders entry form", () => {
  expect(shallow(<EntriesFormView />)).toBeDefined();
});


