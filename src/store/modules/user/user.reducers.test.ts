//thunks
import reducer, { loginUserSuccess, signUpUserSuccess } from ".";

//fixtures
import { user } from "./fixtures";

describe("user reducer", () => {
  const userInitialState = {
    isLoggedIn: false,
    user: {}
  };
  it("returns the initial state", () => {
    expect(reducer(undefined, { type: "test" })).toEqual(userInitialState);
  });

  it("shoud handle login user success", () => {
    const loginUserSuccessAction = loginUserSuccess(user);
    const loggedInUserState = reducer(userInitialState, loginUserSuccessAction);
    expect(loggedInUserState.user.name).toEqual("charles");
  });

  it("should handle register user success", () => {
    const registerUserSuccessAction = signUpUserSuccess(user);
    const registeredUserState = reducer(
      userInitialState,
      registerUserSuccessAction
    );
    expect(registeredUserState.isLoggedIn).toBeFalsy()
  });
});
