//types
import {
  GET_ENTRIES_SUCCESS,
  GET_ENTRY_SUCCESS,
  EDIT_ENTRY_SUCCESS,
  ADD_ENTRY_SUCCESS,
  DELETE_ENTRY_SUCCESS,
  ERROR
} from "./types";

export interface GetEntriesSuccess {
  type: GET_ENTRIES_SUCCESS;
  payload: object;
}
export interface GetEntrySuccess {
  payload: object;
  type: GET_ENTRY_SUCCESS;
}
export interface EditEntrySuccess {
  payload: object;
  type: EDIT_ENTRY_SUCCESS;
}
export interface AddEntrySuccess {
  payload: object;
  type: ADD_ENTRY_SUCCESS;
}
export interface DeleteEntrySuccess {
  payload: object;
  type: DELETE_ENTRY_SUCCESS;
}
export interface EntryFailure {
  type: ERROR;
}

export interface Entry {
  id: string;
  [key: string]: any;
}
