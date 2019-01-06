// react libraries
import * as React from "react";

// third party libraries
import { mount, shallow } from "enzyme";

//component
import { Entry } from ".";

//fixtures
import { props } from "./fixtures";

describe("Entry component", () => {
  let wrapper, shallowWrapper;
  beforeEach(() => {
    wrapper = mount(<Entry {...props} />);
    shallowWrapper = shallow(<Entry {...props} />);
  });

  afterEach(() => {
    wrapper = shallowWrapper = null;
  });

  it("should render entry propery", () => {
    expect(shallowWrapper).toMatchSnapshot();
    expect(shallowWrapper.find("button").length).toBe(2);
  });

  it("should simulate delete", () => {
    wrapper
      .find("button")
      .last()
      .simulate("click");
      expect(props.delete).toBeCalled();
  });
});
