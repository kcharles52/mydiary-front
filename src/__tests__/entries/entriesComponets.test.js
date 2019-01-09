import React from "react";
import { shallow } from "enzyme";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../../reducers/rootReducer";
import { SingleEntry } from "../../components/entries/singleEntry";
import { EditMyEntry } from "../../components/entries/editEntry";
import { NewEntry } from "../../components/entries/newEntryForm";

import { Entries } from "../../views/entriesView";
import Entry from "../../views/singleEntryView";

export const store = createStore(rootReducer, applyMiddleware(thunk));
describe("Entries Components", () => {
  it("renders entry ", () => {
    let props = {
      getEntry: jest.fn(),
      response: { map: jest.fn() },
      match: { params: { entry_id: 1 } }
    };
    let component = shallow(<SingleEntry store={store} {...props} />);
    expect(component);
  });
  it("renders entry ", () => {
    let props = {
      getEntry: jest.fn(),
      addEntry: jest.fn(),
      response: { map: jest.fn() },
      match: { params: { entry_id: 1 } }
    };
    let component = shallow(<NewEntry store={store} {...props} />);
    expect(component.instance().createNewEntry()).toBeUndefined();
    expect(component.instance().getInput()).toBeUndefined();
  });
  it("renders edit entry ", () => {
    let props = {
      editDirayEntry: jest.fn(),
      EditEntry: jest.fn(),
      getEntry: jest.fn(),
      getInput: jest.fn(),
      nextProps: { response: { Message: "",entry:{  date: '', diaryBody: "undefined", diaryTitle: "undefined" }, } },
      componentWillReceiveProps: jest.fn(),
      match: { params: { entry_id: 1 } }
    };
    let component = shallow(<EditMyEntry store={store} {...props} />);
    expect(component.instance().editDirayEntry()).toBeUndefined();
    expect(component.instance().getInput()).toBeUndefined();
    expect(
      component.instance().componentWillReceiveProps(props.nextProps)
    ).toBeUndefined();

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
