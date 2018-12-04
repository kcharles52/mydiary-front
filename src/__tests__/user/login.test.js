import React from "react";
import LoginForm from "../../views/loginView";
import { shallow, mount } from "enzyme";
import { Login } from "../../components/user/loginForm";
import Nav from "../../components/common/navBar";

it("renders without crush", () => {
  let component = mount(<LoginForm />);
  expect(component.contains("Welcome Back!"));
});
describe("LoginForm", () => {
  let component;
  let push = jest.fn();
  let loginAction = jest.fn();
  let props = { loginAction, history: { push } };
  beforeEach(() => {
    component = shallow(<Login {...props} />);
  });
  it("renders without crush", () => {
    expect(component.instance().handleLogin({})).toBeUndefined();
  });
  it("receives next props", () => {
    component.setProps({ user: { isLoggedIn: true, user: { Token: "" } } });
    expect(component.instance().handleLogin({})).toBeUndefined();
  });
});

describe("Logout", () => {
  let navbar = mount(<Nav />);
  it("Has handle click function", () => {
    expect(navbar.instance().handleClick()).toBeUndefined();
  });
});
