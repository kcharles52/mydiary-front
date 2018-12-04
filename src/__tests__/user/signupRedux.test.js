import signup from "../../actions/user/signupAction";
import { mockSetup, axiosMock } from "./loginRedux.test";
import { SIGNUP_URL } from "../../appUrls/API_URLS";
let store;
let mock;
describe("login action", () => {
  beforeEach(() => {
    ({ mock, store } = mockSetup(mock, store));
  });
  it("dispatches login action", () => {
    axiosMock(201, signup, SIGNUP_URL);
  });
  it("dispatches login error action", () => {
    mock.onPost(URL).reply(400, {});
    signup({})(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
});
