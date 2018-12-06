import {GET_ENTRIES,EDIT_ENTRY, ADD_ENTRY, GET_ENTRY } from "../actionTypes";
import axios from "axios";
import { ENTRIES_URL } from "../../appUrls/API_URLS";

export const getEntries = () => dispatch => {
  axios
    .get(ENTRIES_URL,headers())
    .then(response => {
      dispatch({
        type: GET_ENTRIES,
        payload: response.data,
      });
    })
    .catch(error => {
        return error.response
    });
};
export const getEntry = (entry_id) => dispatch => {
  let SingleEntryUrl = ENTRIES_URL + `/${entry_id}`
  axios
    .get(SingleEntryUrl,headers())
    .then(response => {
      dispatch({
        type: GET_ENTRY,
        payload: response.data,
      });
    })
    .catch(error => {
        return error.response
    });
};

export const addEntry = (data) => dispatch => {
  axios
    .post(ENTRIES_URL,data,headers())
    .then(response => {
      dispatch({
        type: ADD_ENTRY,
        payload: response.data,
      });
    })
    .catch(error => {
        return error.response
    });
};

export const EditEntry = (data) => dispatch => {
    axios
      .put(ENTRIES_URL,data,headers())
      .then(response => {
        dispatch({
          type: EDIT_ENTRY,
          payload: response.data,
        });
      })
      .catch(error => {
        return error.response
      });
  };
  
function headers() {
    const token = localStorage.getItem("token");
    return {
      headers: { Authorization: `${token}` }
    };
  }