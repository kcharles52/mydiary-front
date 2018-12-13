// react libraries
import * as React from "react";

// third-party libraries
import { mount, shallow } from "enzyme";

// components
import { mapDispatchToProps, mapStateToProps, FormBox } from "./";

describe("Formbox component", () => {
  let wrapper, shallowWrapper, props;
  props = {
    loginUserAction: jest.fn(() => Promise.resolve()),
    registerUserAction: jest.fn(() => Promise.resolve()),
    ToggleTab: jest.fn(),
    HandleInputChange: jest.fn(),
    history: { push: jest.fn() }
  };

  beforeEach(() => {
    wrapper = mount(<FormBox {...props} />);
    shallowWrapper = shallow(<FormBox {...props} />);
  });
  afterEach(() => {
    wrapper = shallowWrapper = null;
  });
  it("should match snapshot", () => {
    expect(shallowWrapper).toMatchSnapshot();
  });

  it("calls onChange prop when input value changes", () => {
    const spy = jest.spyOn(wrapper.instance(), "HandleInputChange");
    wrapper.instance().forceUpdate();
    wrapper
      .find("input")
      .first()
      .simulate("change");
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it("calls  HandleSubmit prop when a submit button is clicked [login]", () => {
    const spy = jest.spyOn(wrapper.instance(), "HandleSubmit");
    wrapper.instance().forceUpdate();
    wrapper.setState({ user: {} });
    wrapper
      .find("Button[label='Login']")
      .first()
      .simulate("click");
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
  it("calls  HandleSubmit prop when a submit button is clicked [register]", () => {
    const spy = jest.spyOn(wrapper.instance(), "HandleSubmit");
    wrapper.instance().forceUpdate();
    wrapper.setState({ user: {}, Signup: true });
    wrapper
      .find("Button[label='Get started']")
      .last()
      .simulate("click");
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it("Should redirect to home page on login", () => {
    wrapper.setProps({
      user: { isLoggedIn: true, user: { token: "token string" } }
    });
    expect(props.history.push).toHaveBeenCalled();
  });

  describe("should change form", () => {
    let spy;
    beforeEach(() => {
      spy = jest.spyOn(wrapper.instance(), "ToggleTab");
    });

    afterEach(() => {
      spy.mockRestore();
    });

    it("Change to Register form", () => {
      wrapper
        .find(".tab")
        .last()
        .simulate("click");
      expect(spy).toHaveBeenLastCalledWith(true);
    });
    it("Change to login form", () => {
      wrapper
        .find(".tab")
        .first()
        .simulate("click");
      expect(wrapper.instance().ToggleTab).toHaveBeenLastCalledWith(false);
    });
  });
});


describe("Connect functions function", () => {
  describe("The mapStateToProps function", () => {
    it("should return the expected props object", () => {
      const state = {
        user: { name: "test", email: "test@email.com" }
      };
      const props = mapStateToProps(state);
      expect(props.user).toEqual(state.user);
    });
  });

  describe("The mapDispatchToProps function", () => {
    let dispatch, props;
    beforeEach(() => {
      dispatch = jest.fn();
      props = mapDispatchToProps(dispatch);
    });
    it("should dispatch loginUser when loginUserAction is called", () => {
      props.loginUserAction();
      expect(dispatch).toHaveBeenCalled();
    });
    it("should dispatch registerUser when registerUserAction is called", () => {
      props.registerUserAction();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
