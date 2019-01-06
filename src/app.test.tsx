/// react libraries
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import  App  from './App';

describe("application",()=>{
    let shallowWrapper;
    beforeEach(()=>{
        shallowWrapper = shallow(<App />)
    })
    it("should render application",()=>{
        expect(shallowWrapper).toMatchSnapshot()
    })
})

