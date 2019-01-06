//react libraries
import * as React from "react";

//third party libraries
import { shallow } from "enzyme";

//component
import { LandingPage } from ".";

describe("Render landing page properly", () => {
  let shallowWrapper;
  
  beforeEach(() => {
    shallowWrapper = shallow(<LandingPage />);
  });
  it("render landing page ", () => {
    expect(shallowWrapper).toMatchSnapshot();
  });
});
