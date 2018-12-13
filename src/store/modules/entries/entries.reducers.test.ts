//thunks
import reducer, {
  getEntriesSuccess,
  getEntrySuccess,
  addEntrySuccess,
  editEntrySuccess,
  deleteEntrySuccess
} from ".";

//fixtures
import { intialState, fetchedEntries, editedEntry } from "./fixtures";

describe("Entries reducer", () => {
  it("returns the initial state", () => {
    expect(reducer(undefined, { type: "test" })).toEqual(intialState);
  });
  it("shoud handle get entries success", () => {
    const getEntriesSucccessAction = getEntriesSuccess(fetchedEntries);
    const getEntriesState = reducer(intialState, getEntriesSucccessAction);
    expect(getEntriesState.entries.length).toEqual(2);
    expect(getEntriesState.Message).toEqual("Successfully fetched entries");
  });

  it("shoud handle add entry success", () => {
    const addEntrySucccessAction = addEntrySuccess(fetchedEntries.entries[0]);
    const getEntriesState = reducer(intialState, addEntrySucccessAction);
    expect(getEntriesState.new).toEqual(fetchedEntries.entries[0]);
  });

  it("shoud handle edit entry success", () => {
    const EditEntrySucccessAction = editEntrySuccess(editedEntry);
    const getEntriesState = reducer(intialState, EditEntrySucccessAction);
    expect(getEntriesState.entry).toEqual(editedEntry);
    expect(getEntriesState.entry["title"]).toEqual("Edited")
  });

  it("shoud handle add entry success", () => {
    const getEntrySucccessAction = getEntrySuccess(fetchedEntries.entries[0]);
    const getEntriesState = reducer(intialState, getEntrySucccessAction);
    expect(getEntriesState.entry).toEqual(fetchedEntries.entries[0]);
  });
  it("shoud handle delete entry success", () => {
    const deleteEntrySucccessAction = deleteEntrySuccess(fetchedEntries.entries[0]);
    const getEntriesState = reducer(intialState, deleteEntrySucccessAction);
    expect(getEntriesState.deleted[0]).toEqual(fetchedEntries.entries[0]);
  });
});
