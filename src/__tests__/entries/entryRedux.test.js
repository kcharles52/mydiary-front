import { ENTRIES_URL } from "../../appUrls/API_URLS";
import {
  getEntries,
  addEntry,
  EditEntry
} from "../../actions/entries/entriesActions";
import entriesReducer from "../../reducers/entriesReducer";
import {
  GET_ENTRIES,
  ENTRY_ERROR,
  ADD_ENTRY,
  GET_ENTRY,
  EDIT_ENTRY
} from "../../actions/actionTypes";
import { mockSetup } from "../user/loginRedux.test";

let store;
let mock;
describe("get entries action", () => {
  beforeEach(() => {
    ({ mock, store } = mockSetup(mock, store));
  });
  it("dispatches get entries action", () => {
    axiosMock(200, getEntries, ENTRIES_URL, []);
  });
  it("dispatches get entries action", () => {
    axiosMock(400, getEntries, ENTRIES_URL, []);
  });
});
describe("add entries action", () => {
  beforeEach(() => {
    ({ mock, store } = mockSetup(mock, store));
  });
  it("dispatches entries add action", () => {
    Mock(201, addEntry, ENTRIES_URL, []);
  });
  it("dispatches entries add action", () => {
    Mock(404, addEntry, ENTRIES_URL, []);
  });
});
describe("edit entries action", () => {
  beforeEach(() => {
    ({ mock, store } = mockSetup(mock, store));
  });
  it("dispatches entries edit action", () => {
    Mock(201, EditEntry, ENTRIES_URL, []);
  });
  it("dispatches entries edit action", () => {
    Mock(404, EditEntry, ENTRIES_URL, []);
  });
});

const action = action => {
  return {
    type: action,
    payload: { status: "", data: "" },
    isLoggedIn: true
  };
};
describe("entries reducer", () => {
  it("succesful fetch", () => {
    expect(entriesReducer({}, action(GET_ENTRIES))).toEqual({
      entries: undefined
    });
  });
  it("updates on unsuccessful fetch", () => {
    expect(entriesReducer({}, action(ENTRY_ERROR))).toEqual({
      error: undefined
    });
  });
  it("add new entry", () => {
    expect(entriesReducer({}, action(ADD_ENTRY))).toEqual({
      new: { data: "", status: "" }
    });
  });

  it("Get entry", () => {
    expect(entriesReducer({}, action(GET_ENTRY))).toEqual({
      entry: { data: "", status: "" }
    });
  });
  it("Edit entry", () => {
    expect(entriesReducer({}, action(EDIT_ENTRY))).toEqual({
      entry: { data: "", status: "" }
    });
  });
});

export const axiosMock = (status, action, URL, data) => {
  mock.onGet(URL).reply(status, {});
  action({})(store.dispatch);
  expect(store.getActions()).toEqual(data);
};
export const Mock = (status, action, URL, data) => {
  mock.onPost(URL).reply(status, {});
  action({})(store.dispatch);
  expect(store.getActions()).toEqual(data);
};
