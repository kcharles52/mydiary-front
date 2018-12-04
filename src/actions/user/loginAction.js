import { LOGIN } from "../actionTypes";
import axios from "axios";
import { LOGIN_URL } from "../../appUrls/API_URLS";

const loginAction = data => dispatch => {
  axios
    .post(LOGIN_URL, data)
    .then(response => {
      dispatch({
        type: LOGIN,
        payload: response.data,
        isLoggedIn: true
      });
    })
    .catch(error => {
      return error.response
    });
};
export default loginAction;
