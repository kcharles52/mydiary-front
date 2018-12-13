// react libraries
import * as React from "react";

// third party libraries
import { mount, shallow } from "enzyme";

// components
import { RegisterForm } from "./RegisterForm";

//fixtures
import { RegisterFormProps as props } from "./fixtures";

describe("Register form componet", () => {
  let wrapper, shallowWrapper;
  beforeEach(() => {
    wrapper = mount(<RegisterForm {...props} />);
    shallowWrapper = shallow(<RegisterForm {...props} />);
  });
  afterEach(() => {
    wrapper = shallowWrapper = null;
  });

  it("Should render register form componet", () => {
    expect(shallowWrapper).toMatchSnapshot();
    expect(shallowWrapper.find("Input").length).toBe(4);
    expect(shallowWrapper.find("Button").length).toBe(1);
  });
  it("should register user", () => {
    wrapper.find("Button").simulate("click");
    expect(wrapper.prop("onSubmit")).toBeCalled();
  });
});
