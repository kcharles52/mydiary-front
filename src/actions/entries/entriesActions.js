import {
  GET_ENTRIES,
  EDIT_ENTRY,
  ADD_ENTRY,
  GET_ENTRY,
  DELETE_ENTRY
} from "../actionTypes";
import axios from "axios";
import { ENTRIES_URL } from "../../appUrls/API_URLS";
import { toast } from "react-toastify";

export const getEntries = () => dispatch => {
  axios
    .get(ENTRIES_URL, headers())
    .then(response => {
      dispatch({
        type: GET_ENTRIES,
        payload: response.data
      });
    })
    .catch(error => {
      toast.error(error.response.data.Message, {
        autoClose: 4500,
        hideProgressBar: true
      });
      return error.response;
    });
};
export const getEntry = entry_id => dispatch => {
  let SingleEntryUrl = ENTRIES_URL + `/${entry_id}`;
  axios
    .get(SingleEntryUrl, headers())
    .then(response => {
      dispatch({
        type: GET_ENTRY,
        payload: response.data
      });
    })
    .catch(error => {
      return error.response;
    });
};

export const addEntry = data => dispatch => {
  axios
    .post(ENTRIES_URL, data, headers())
    .then(response => {
      toast.success(response.data.Message, {
        autoClose: 3500,
        hideProgressBar: true
      });
      dispatch({
        type: ADD_ENTRY,
        payload: response.data
      });
    })
    .catch(error => {
      return error;
    });
};

export const EditEntry = (data, entry_id) => dispatch => {
  let EntryUrl = ENTRIES_URL + `/${entry_id}`;

  axios
    .put(EntryUrl, data, headers())
    .then(response => {
      dispatch({
        type: EDIT_ENTRY,
        payload: response.data
      });
    })
    .catch(error => {
      return error.response;
    });
};
export const deleteEntry = entry_id => dispatch => {
  let EntryUrl = ENTRIES_URL + `/${entry_id}`;

  axios
    .delete(EntryUrl, headers())
    .then(response => {
      toast.success(response.data.Message, {
        autoClose: 3500,
        hideProgressBar: true
      });
      dispatch({
        type: DELETE_ENTRY,
        payload: response.data
      });
    })
    .catch(error => {
      toast.error(error.response.data.Message, {
        autoClose: 4000,
        hideProgressBar: true
      });
      return error.response;
    });
};
function headers() {
  const token = localStorage.getItem("token");
  return {
    headers: { Authorization: `${token}` }
  };
}
