import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import configureMockStore from "redux-mock-store";
import { LOGIN_URL } from "../../appUrls/API_URLS";
import loginAction from "../../actions/user/loginAction";
import userReducer from "../../reducers/userReducer";
import { LOGIN, ERROR } from "../../actions/actionTypes";

let store;
let mock;
describe("login action", () => {
  beforeEach(() => {
    ({ mock, store } = mockSetup(mock, store));
  });
  it("dispatches login action", () => {
    axiosMock(200, loginAction);
  });
  it("dispatches login error action", () => {
    axiosMock(400, loginAction);
  });
});

let initialState = {
  user: {},
  isLoggedIn: false
};
const action = action => {
  return {
    type: action,
    payload: { status: "", data: "" },
    isLoggedIn: true
  };
};
describe("login reducer", () => {
  it("updates on succesful login", () => {
    expect(userReducer(initialState, action(LOGIN))).toEqual({
      isLoggedIn: true,
      user: { data: "", status: "" }
    });
  });
  it("updates on unsuccessful login", () => {
    expect(userReducer(initialState, action(ERROR))).toEqual({
      error: "",
      isLoggedIn: false,
      status: "",
      user: {}
    });
  });
});
export const mockSetup = (mock, store) => {
  mock = new MockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
  return { mock, store };
};
export const axiosMock = (status, action) => {
  mock.onPost(LOGIN_URL).reply(status, {});
  action({})(store.dispatch);
  expect(store.getActions()).toEqual([]);
};
