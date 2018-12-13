//third party libries
import axios from "axios";
import { toast } from "react-toastify";

//thunk
import { displayToastMessage } from "../toasts";

//interfaces
import {
  LoginUserSuccess,
  SignUpUserSuccess,
  LoginUserFailure,
  Person
} from "./interfaces";
import { Action } from "../../../shared.interfaces";

//action types
import { LOGIN_SUCCESS, SIGNUP_SUCCESS, ERROR } from "./types";
import { LOGIN_URL, SIGNUP_URL } from "../../../appUrls/API_URLS";

/**
 * Login user action creater
 * @param {object} user
 *
 * @returns {LoginUserSuccess}
 */
export const loginUserSuccess = (user: object): LoginUserSuccess => ({
  user,
  type: LOGIN_SUCCESS,
  isLoggedIn: true
});

/**
 * Make a post request to authenticate a user
 * @param {object} userData
 *
 * @returns {Function}
 */

export const loginUser = (userData: Person) => dispatch => {
  return axios
    .post(LOGIN_URL, userData)
    .then(response => {
      dispatch(loginUserSuccess(response.data));
      dispatch(
        displayToastMessage("You have successfully logged in", "success", true)
      );
    })
    .catch(error =>
      dispatch(displayToastMessage(error.response.data.Message, "danger"))
    );
};

/**
 * Register user action creater
 * @param {object} user
 *
 * @returns {SignUpUserSuccess}
 */
export const signUpUserSuccess = (user: object): SignUpUserSuccess => ({
  type: SIGNUP_SUCCESS
});

/**
 * Make a post request to save user data
 * @param {object} userData
 *
 * @returns {Function}
 */
export const registerUser = (userData: Person) => dispatch => {
  return axios
    .post(SIGNUP_URL, userData)
    .then(response => {
      dispatch(signUpUserSuccess(response.data));
      dispatch(
        displayToastMessage(
          "You have successfully registered, please login",
          "success",
          true
        )
      );
    })
    .catch(error =>
      dispatch(displayToastMessage(error.response.data.Message, "danger"))
    );
};

export const intialState = {
  user: {},
  isLoggedIn: false
};

/**
 * Redux reducer for user actions
 *
 * @param {UserState} state Reducer initial state
 * @param {Action} action
 *
 * @returns {UserState} new state
 */
const reducer = (state = intialState, action: Action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedIn: action.isLoggedIn
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default reducer;
