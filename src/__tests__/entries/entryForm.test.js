import React from "react";
import { shallow } from "enzyme";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../../reducers/rootReducer";
import EntriesFormView from "../../views/newEntryView";
import { Entries } from "../../views/entriesView";
import Entry from "../../views/singleEntryView";

export const store = createStore(rootReducer, applyMiddleware(thunk));
describe("Entries vies", () => {
  it("renders entry form", () => {
    let props = {
      entry: {
        diaryTitle: ""
      }
    };
    expect(shallow(<EntriesFormView {...props} />)).toBeDefined();
  });
  it("Render entries", () => {
    let component = shallow(<Entries />);
    expect(component.hasClass("dEntryH")).toBeTruthy();
  });
  it("Render entries", () => {
    let component = shallow(<Entry />);
    expect(component.hasClass("dEntry")).toBeTruthy();
  });
});
