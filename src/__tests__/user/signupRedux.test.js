import signup from "../../actions/user/signupAction";
import { mockSetup, axiosMock } from "./loginRedux.test";
import { SIGNUP_URL } from "../../appUrls/API_URLS";
let store;
let mock;
describe("login action", () => {
  beforeEach(() => {
    ({ mock, store } = mockSetup(mock, store));
  });
  it("dispatches signup action", () => {
    axiosMock(201, signup, SIGNUP_URL);
  });
  it("dispatches signup action", () => {
    mock.onPost(SIGNUP_URL).reply(200, {});
    signup({})(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
});
