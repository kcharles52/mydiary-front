//react libraries
import * as React from "react";

//third party libraries
import { mount, shallow } from "enzyme";

//fixtures
import { props, fetchedEntries } from "./fixtures";

//component
import { HomeLogedIn, mapStateToProps, mapDispatchToProps } from ".";

describe("Should render entries", () => {
  let wrapper, shallowWrapper;

  beforeEach(() => {
    wrapper = mount(<HomeLogedIn {...props} />);
    shallowWrapper = shallow(<HomeLogedIn {...props} />);
  });

  it("should render entries ", () => {
    expect(shallowWrapper).toMatchSnapshot();
  });
  it("Rerender after deleting entries", () => {
    wrapper.setProps({ deleted: [{}] });
  });
  it("Should render title you have no entries", () => {
    wrapper.setProps({ entries: [] });
    expect(wrapper.instance().state.header).toEqual("You have no entries ");
  });

  it("should delete entry", () => {
    const spy = jest.spyOn(wrapper.instance(), "editRoute");
    wrapper.instance().forceUpdate();
    wrapper
      .find("button")
      .first()
      .simulate("click");
    expect(spy).toBeCalled();
    spy.mockRestore();
  });

  it("should redirect to edit entry page",()=>{
    const spy = jest.spyOn(wrapper.instance(), "handlesDelete");
    wrapper.instance().forceUpdate();
    wrapper
      .find("button")
      .last()
      .simulate("click");
    expect(spy).toBeCalled();
    spy.mockRestore();
  });
  
});

describe("Connect functions function", () => {
  describe("The mapStateToProps function", () => {
    it("should return the expected props object", () => {
      const state = {
        entries: { entries: fetchedEntries }
      };
      const props = mapStateToProps(state);
      expect(props.entries).toEqual(state.entries.entries);
    });
  });

  describe("The mapDispatchToProps function", () => {
    let dispatch, props;
    beforeEach(() => {
      dispatch = jest.fn();
      props = mapDispatchToProps(dispatch);
    });
    it("should dispatch getEntry when getEntryAction is called", () => {
      props.getEntriesAction();
      expect(dispatch).toHaveBeenCalled();
    });
    it("should dispatch getEntry when deleteEntryAction is called", () => {
      props.deleteEntryAction();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
