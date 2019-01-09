//react libraries
import * as React from "react";

//third party libraries
import { mount, shallow } from "enzyme";

//fixtures
import { props, fetchedEntry } from "./fixtures";

import { SingleEntry, mapDispatchToProps, mapStateToProps } from ".";

describe("Render single entry", () => {
  let wrapper, shallowWrapper;

  beforeEach(() => {
    wrapper = mount(<SingleEntry {...props} />);
    shallowWrapper = shallow(<SingleEntry {...props} />);
  });

  it("should render single entry", () => {
    expect(shallowWrapper).toMatchSnapshot();
  });

  it("should delete entry on click delete", () => {
    const spy = jest.spyOn(wrapper.instance(), "deleteEntry");
    wrapper.instance().forceUpdate();
    wrapper
      .find("button")
      .last()
      .simulate("click");
    expect(spy).toBeCalled();
    spy.mockRestore();
  });

  it("should redirect to edit form on click edit", () => {
    const spy = jest.spyOn(wrapper.instance(), "editRoute");
    wrapper.instance().forceUpdate();
    wrapper
      .find("button")
      .first()
      .simulate("click");
    expect(spy).toBeCalled();
    spy.mockRestore();
  });

  describe("The mapStateToProps function", () => {
    it("should return the expected props object", () => {
      const state = {
        entries: { entry: fetchedEntry }
      };
      const props = mapStateToProps(state);
      expect(props.fetchedEntry).toEqual(state.entries.entry);
    });
  });

  describe("The mapDispatchToProps function", () => {
    let dispatch, props;
    beforeEach(() => {
      dispatch = jest.fn();
      props = mapDispatchToProps(dispatch);
    });
    it("should dispatch getEntry when getEntryAction is called", () => {
      props.getEntryAction();
      expect(dispatch).toHaveBeenCalled();
    });
    it("should dispatch getEntry when deleteEntryAction is called", () => {
      props.deleteEntryAction();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
