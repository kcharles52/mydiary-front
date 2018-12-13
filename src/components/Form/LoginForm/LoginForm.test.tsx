// react libraries
import * as React from "react";

// third party libraries
import { mount, shallow } from "enzyme";

// components
import { LoginForm } from "./LoginForm";

//fixtures
import { LoginFormProps as props } from "./fixtures";

describe("Login form component", () => {
  let wrapper, shallowWrapper;

  beforeEach(() => {
    wrapper = mount(<LoginForm {...props} />);
    shallowWrapper = shallow(<LoginForm {...props} />);
  });
  afterEach(() => {
    wrapper = shallowWrapper = null;
  });

  it("should render login form component", () => {
    expect(shallowWrapper).toMatchSnapshot();
    expect(shallowWrapper.find("Input").length).toBe(2);
  });

  it("should login user", () => {
    wrapper.find("Button").simulate("click");
    expect(wrapper.prop("onSubmit")).toBeCalled()
  });
});
