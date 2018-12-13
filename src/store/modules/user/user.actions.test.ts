//third-party libraries
import axios from "axios";

//thunks
import { loginUser, registerUser } from ".";

//helper functions
import {
  axiosMock,
  dispatchMethodMock,
  reduxMockStore,
  mockStore
} from "../../../testHelpers";
import { authService } from "../../../utils/auth";

//fixtures
import { user, responseLoggedIn } from "./fixtures";

//types
import { LOGIN_SUCCESS, SIGNUP_SUCCESS, LOG_OUT_USER } from "./types";

//API urs
import { LOGIN_URL, SIGNUP_URL } from "../../../appUrls/API_URLS";

jest.mock("axios");
describe("User actions", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe("login user", () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });

    const userInitialState = {};
    it("login user successfully", () => {
      const mockHttpResponse = {
        response: {
          data: responseLoggedIn.user
        }
      };
      const expectedAction = [
        {
          isLoggedIn: true,
          type: LOGIN_SUCCESS
        },
        {
          toast: {
            message: "You have successfully logged in",
            type: "success",
            withName: true
          },
          type: "mydiary-front/DISPLAY_TOAST_MESSAGE"
        }
      ];
      axios.post.mockResolvedValue(mockHttpResponse);

      const http = axiosMock(LOGIN_URL, mockHttpResponse, false);
      const store = reduxMockStore(http, userInitialState);

      return dispatchMethodMock(store, loginUser(user), expectedAction);
    });
  });
  describe("Register user", () => {
    const userInitialState = {};
    it("register user successfully", () => {
      const mockHttpResponse = {
        response: {
          data: responseLoggedIn.user
        }
      };
      const expectedAction = [
        {
          
          type: SIGNUP_SUCCESS
        },
        {
          toast: {
            message: "You have successfully registered, please login",
            type: "success",
            withName: true
          },
          type: "mydiary-front/DISPLAY_TOAST_MESSAGE"
        }
      ];
      axios.post.mockResolvedValue(mockHttpResponse);

      const http = axiosMock(SIGNUP_URL, mockHttpResponse);
      const store = reduxMockStore(http, userInitialState);

      return dispatchMethodMock(store, registerUser(user), expectedAction);
    });
   
  });
});
