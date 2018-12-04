import { SIGNUP, ERROR } from "../actionTypes";
import axios from "axios";
import { SIGNUP_URL } from "../../appUrls/API_URLS";

const signup = data => dispatch => {
  axios
    .post(SIGNUP_URL, data)
    .then(res => {
      dispatch({
        type: SIGNUP,
        payload: res
      });
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error.response
      });
    });
};
export default signup;