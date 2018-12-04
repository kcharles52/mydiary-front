import React from "react";
import SignupForm from "../../views/signupView";
import { mount, shallow } from "enzyme";
import { Signup } from "../../components/user/signupForm";
import Home from "../../components/index";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../reducers/rootReducer";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";

it("renders without crush", () => {
  let component = shallow(<SignupForm />);
  expect(component.hasClass("auth-form")).toEqual(true);
});

const store = createStore(rootReducer, applyMiddleware(thunk));
describe("signup page", () => {
  let component;
  let wrapper;
  let push = jest.fn();
  let display = "signup";
  let loginAction = jest.fn();
  let SignUpAction = jest.fn();
  let props = { SignUpAction, loginAction, history: { push }, display };
  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Home {...props} />
        </MemoryRouter>
      </Provider>
    );
    wrapper = shallow(<Signup {...props} />);
  });
  it("submits values", () => {
    let form = component.find("form");
    form.simulate("submit");
  });
  it("registers a new user and dispachted login", () => {
    wrapper.setProps({ register: 201 });
    expect(wrapper.instance().handleRegistration({})).toBeUndefined();
  });
});
