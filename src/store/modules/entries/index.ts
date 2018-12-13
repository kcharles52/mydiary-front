//third party libries
import axios from "axios";

//thunk
import { displayToastMessage } from "../toasts";

//interfaces
import {
  GetEntriesSuccess,
  GetEntrySuccess,
  EditEntrySuccess,
  AddEntrySuccess,
  DeleteEntrySuccess
} from "./interfaces";
import { Action } from "../../../shared.interfaces";

//action types
import {
  GET_ENTRIES_SUCCESS,
  GET_ENTRY_SUCCESS,
  EDIT_ENTRY_SUCCESS,
  ADD_ENTRY_SUCCESS,
  DELETE_ENTRY_SUCCESS,
  ERROR
} from "./types";

//api urls
import { ENTRIES_URL } from "../../../appUrls/API_URLS";

//helper functions
import { headers } from "../../../utils/helpers/headers";

/**
 * Get entries action creater
 *
 * @returns {GetEntriesSuccess}
 */
export const getEntriesSuccess = (responseData: object): GetEntriesSuccess => ({
  type: GET_ENTRIES_SUCCESS,
  payload: responseData
});

/**
 * Make a get request to get diary entries
 *
 * @returns {Function}
 */

export const getEntries = () => dispatch => {
  return axios
    .get(ENTRIES_URL, headers())
    .then(response => {
      dispatch(getEntriesSuccess(response.data));
      dispatch(
        displayToastMessage(
          "You have successfully fetch your entries",
          "success",
          true
        )
      );
    })
    .catch(error => 
      dispatch(displayToastMessage(error.response.data.Message, "danger"))
    );
};

/**
 * Get single entry action creater
 * @param {string} id
 *
 * @returns {GetEntrySuccess}
 */
export const getEntrySuccess = (responseData: object): GetEntrySuccess => ({
  type: GET_ENTRY_SUCCESS,
  payload: responseData
});

/**
 * Make a post request to save user data
 * @param {entryId} EntryID
 *
 * @returns {Function}
 */
export const getEntry = (entry_id: string) => dispatch => {
  let SingleEntryUrl = ENTRIES_URL + `/${entry_id}`;

  return axios
    .get(SingleEntryUrl, headers())
    .then(response => {
      dispatch(getEntrySuccess(response.data));
      dispatch(
        displayToastMessage(
          "You have successfully retrieved your entry",
          "success",
          true
        )
      );
    })
    .catch(error =>
      dispatch(displayToastMessage(error.response.data.Message, "danger"))
    );
};

/**
 * Add a diary entry
 * @param {object} Entry data to be saved
 *
 * @returns {AddEntrySuccess}
 */
export const addEntrySuccess = (responseData: object): AddEntrySuccess => ({
  type: ADD_ENTRY_SUCCESS,
  payload: responseData
});

/**
 * Make a post request to save entry
 * @param {object} Entry data
 *
 * @returns {Function}
 */
export const addEntry = (entryData: object) => dispatch => {
  return axios
    .post(ENTRIES_URL, entryData, headers())
    .then(response => {
      dispatch(addEntrySuccess(response.data));
      dispatch(
        displayToastMessage(
          "You have successfully created your entry",
          "success",
          true
        )
      );
    })
    .catch(error => {
      dispatch(displayToastMessage(error.response.data.Message, "danger"));
    });
};

/**
 * Edit a diary entry
 * @param {object} Entry data to be saved
 *
 * @returns {EditEntrySuccess}
 */
export const editEntrySuccess = (responseData: object): EditEntrySuccess => ({
  type: EDIT_ENTRY_SUCCESS,
  payload: responseData
});

/**
 * Make a put request to save entry
 * @param {object} Entry data
 *
 * @returns {Function}
 */
export const editEntry = (entryData: object, entry_id: string) => dispatch => {
  let EntryUrl = ENTRIES_URL + `/${entry_id}`;

  return axios
    .put(EntryUrl, entryData, headers())
    .then(response => {
      dispatch(editEntrySuccess(response.data));
      dispatch(
        displayToastMessage(
          "You have successfully updated your entry",
          "success",
          true
        )
      );
    })
    .catch(error => {
      dispatch(displayToastMessage(error.response.data.Message, "danger"));
    });
};

/**
 * Delete a diary entry
 *
 * @returns {DeleteEntrySuccess}
 */
export const deleteEntrySuccess = (
  responseData: object
): DeleteEntrySuccess => ({
  type: DELETE_ENTRY_SUCCESS,
  payload: responseData
});

/**
 * Make a delete request to delete entry
 * @param {entry_id} EntryID data
 *
 * @returns {Function}
 */
export const deleteEntry = (entry_id: number) => dispatch => {
  let EntryUrl = ENTRIES_URL + `/${entry_id}`;

  return axios
    .delete(EntryUrl, headers())
    .then(response => {
      dispatch(deleteEntrySuccess(response.data));
      dispatch(
        displayToastMessage(
          "You have successfully deleted your entry",
          "success",
          true
        )
      );
    })
    .catch(error => {
      dispatch(displayToastMessage(error.response.data.Message, "danger"));
    });
};

export const intialState = {
  entries: [],
  entry: {},
  new: {},
  Message: "",
  deleted: []
};

/**
 * Redux reducer for user actions
 *
 * @param {EntriesState} state Reducer initial state
 * @param {Action} action
 *
 * @returns {EntriesState} new state
 */
const reducer = (state = intialState, action: Action) => {
  switch (action.type) {
    case GET_ENTRIES_SUCCESS:
      return {
        ...state,
        entries: action.payload.entries,
        Message: action.payload.Message
      };
    case ADD_ENTRY_SUCCESS:
      return {
        ...state,
        new: action.payload
      };
    case GET_ENTRY_SUCCESS:
      return {
        ...state,
        entry: action.payload
      };
    case EDIT_ENTRY_SUCCESS:
      return {
        ...state,
        entry: action.payload,
        Message: action.payload.Message
      };
    case DELETE_ENTRY_SUCCESS:
      return {
        ...state,
        deleted: state.deleted.concat(action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
