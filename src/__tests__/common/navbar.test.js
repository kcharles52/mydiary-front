import React from "react";
import { shallow } from "enzyme";
import Navbar from "../../components/common/navBar";
import { NavItem } from "reactstrap";
describe("Navigation bar", () => {
  it("should render the navbar elements", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(NavItem)).toHaveLength(3);
    expect(wrapper.instance().toggle()).toBeUndefined();

  });
});
