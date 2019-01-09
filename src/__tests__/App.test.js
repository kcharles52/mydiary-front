import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import Home from "../components/index";

it("renders without crashing", () => {
  mount(<App />);
});
describe("Index page", ()=>{
 let index = shallow(<Home/>)
 expect(index.instance().loginTab()).toBeUndefined()
 expect(index.instance().SignupTab()).toBeUndefined()

})