//third-party libraries
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import mockAxios from "axios";

//thunks
import { getEntries, getEntry, addEntry, editEntry, deleteEntry } from ".";

// types
import {
  GET_ENTRIES_SUCCESS,
  GET_ENTRY_SUCCESS,
  EDIT_ENTRY_SUCCESS,
  ADD_ENTRY_SUCCESS,
  DELETE_ENTRY_SUCCESS
} from "./types";

//fixtures
import { fetchedEntries, intialState, editedEntry } from "./fixtures";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();
jest.mock("axios");
describe("Entries actions", () => {
  it("get entries", async () => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({ data: fetchedEntries })
    );

    const expectedAction = [
      {
        payload: fetchedEntries,
        type: GET_ENTRIES_SUCCESS
      },
      {
        toast: {
          message: "You have successfully fetch your entries",
          type: "success",
          withName: true
        },
        type: "mydiary-front/DISPLAY_TOAST_MESSAGE"
      }
    ];

    const store = mockStore(intialState);
    return await store.dispatch(getEntries()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it("get single Entry", async () => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({ data: fetchedEntries[0] })
    );

    const expectedAction = [
      {
        payload: fetchedEntries[0],
        type: GET_ENTRY_SUCCESS
      },
      {
        toast: {
          message: "You have successfully retrieved your entry",
          type: "success",
          withName: true
        },
        type: "mydiary-front/DISPLAY_TOAST_MESSAGE"
      }
    ];

    const store = mockStore(intialState);
    return await store.dispatch(getEntry("1")).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it("Add Entry", async () => {
    mockAxios.post.mockImplementation(() =>
      Promise.resolve({ data: editedEntry })
    );

    const expectedAction = [
      {
        payload: editedEntry,
        type: ADD_ENTRY_SUCCESS
      },
      {
        toast: {
          message: "You have successfully created your entry",
          type: "success",
          withName: true
        },
        type: "mydiary-front/DISPLAY_TOAST_MESSAGE"
      }
    ];

    const store = mockStore(intialState);
    return await store.dispatch(addEntry(editedEntry)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it("Edit Entry", async () => {
    mockAxios.put.mockImplementation(() =>
      Promise.resolve({ data: editedEntry })
    );

    const expectedAction = [
      {
        payload: editedEntry,
        type: EDIT_ENTRY_SUCCESS
      },
      {
        toast: {
          message: "You have successfully updated your entry",
          type: "success",
          withName: true
        },
        type: "mydiary-front/DISPLAY_TOAST_MESSAGE"
      }
    ];

    const store = mockStore(intialState);
    return await store.dispatch(editEntry(editedEntry, "1")).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it("Delete Entry", async () => {
    mockAxios.delete.mockImplementation(() =>
      Promise.resolve({ data: editedEntry })
    );

    const expectedAction = [
      {
        payload: editedEntry,
        type: DELETE_ENTRY_SUCCESS
      },
      {
        toast: {
          message: "You have successfully deleted your entry",
          type: "success",
          withName: true
        },
        type: "mydiary-front/DISPLAY_TOAST_MESSAGE"
      }
    ];

    const store = mockStore(intialState);
    return await store.dispatch(deleteEntry(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
