// react libraries
import * as React from "react";

// third party libraries
import { shallow } from "enzyme";

//components
import { Footer } from "./footer";

describe("Render footer", () => {
  let wrapper, shallowWrapper;
  beforeEach(() => {
    shallowWrapper = shallow(<Footer />);
  });
  afterEach(() => {
    shallowWrapper = null;
  });

  it("should render the footer correctly", () => {
    expect(shallowWrapper).toMatchSnapshot();
  });
});
