import { LOGIN } from "../actionTypes";
import axios from "axios";
import { LOGIN_URL } from "../../appUrls/API_URLS";
import { toast } from "react-toastify";

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
      toast.error(error.response.data.Message, {
        autoClose: 5000,
        hideProgressBar: true
      });
      return error.response
    });
};
export default loginAction;
