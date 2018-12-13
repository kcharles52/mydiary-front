//react libraries
import * as React from "react";

//third party libraries
import { mount, shallow } from "enzyme";

//fixtures
import { props, entry } from "./fixtures";

import { CreatEditEntry, mapDispatchToProps, mapStateToProps } from ".";

describe("Should render entries", () => {
  let wrapper, shallowWrapper;

  beforeEach(() => {
    wrapper = mount(<CreatEditEntry {...props} />);
    shallowWrapper = shallow(<CreatEditEntry {...props} />);
  });

  afterEach(() => {
    wrapper = shallowWrapper = null;
  });
  it("should render createEditForm ", () => {
    expect(shallowWrapper).toMatchSnapshot();
  });

  it("should render edit form on Edit=true", () => {
    let props = {
      match: { params: { entry_id: "1" } },
      getEntryAction: Promise.resolve(entry),
      Edit: true,
      history: { push: jest.fn() }
    };
    wrapper.setProps(props);
    wrapper.setState({ Edit: true });
    wrapper.update();

    const spy = jest.spyOn(wrapper.instance(), "editDiaryEntry");
    wrapper.instance().forceUpdate();

    wrapper.find("button").simulate("click");
  });

  it("should create entry", () => {
    let props = {
      match: { params: { entry_id: undefined } },
      Edit: false,
      addEntryAction: jest.fn(),
      history: { push: jest.fn() }
    };

    const wrapper = mount(<CreatEditEntry {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "createNewEntry");

    wrapper
      .find("input")
      .first()
      .simulate("change", {
        target: { value: "Test title", name: "diaryTitle" }
      });
    expect(wrapper.state().Entry.diaryTitle).toContain("Test title");

    wrapper.find("button").simulate("click");
    expect(spy).toBeCalled();
    spy.mockRestore();
  });
});

describe("Connect functions function", () => {
  describe("The mapStateToProps function", () => {
    it("should return the expected props object", () => {
      const state = {
        entries: { entry: entry, new: entry }
      };
      const props = mapStateToProps(state);
      expect(props.editEntry).toEqual(state.entries.entry);
      expect(props.newEntry).toEqual(state.entries.entry);
    });
  });

  describe("The mapDispatchToProps function", () => {
    let dispatch, props;
    beforeEach(() => {
      dispatch = jest.fn();
      props = mapDispatchToProps(dispatch);
    });
    it("should dispatch addEntry when addEntryAction is called", () => {
      props.addEntryAction();
      expect(dispatch).toHaveBeenCalled();
    });
    it("should dispatch editEntry when editEntryAction is called", () => {
      props.editEntryAction();
      expect(dispatch).toHaveBeenCalled();
    });
    it("should dispatch getEntry when getEntryAction is called", () => {
      props.getEntryAction();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
