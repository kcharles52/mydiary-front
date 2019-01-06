// react libraries
import * as React from "react";

// third party libraries
import { mount, shallow } from "enzyme";

//components
import { NavigationBar } from "./navBar";

describe("Render navigation bar", () => {
  let wrapper, shallowWrapper;
  beforeEach(() => {
    wrapper = mount(<NavigationBar />);
    shallowWrapper = shallow(<NavigationBar />);
  });
  afterEach(() => {
    wrapper = shallowWrapper = null;
  });

  it("should render the navbar corrextly", () => {
    expect(shallowWrapper).toMatchSnapshot();
  });
  it("should toggle navbar", () => {
    wrapper.setState({ isOpen: false });
    wrapper.instance().toggle();
    expect(wrapper.instance().state.isOpen).toBe(true);
  });
  it("should logout user", () => {
    wrapper
      .find("a")
      .last()
      .simulate("click");
    // expect(wrapper.instance().handleClick()).toBeCalled();
  });
});
