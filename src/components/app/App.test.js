import React from 'react';
import App from './App';
import {shallow} from 'enzyme';


describe('testing main app', () => {
  it('should render the main app component', () => {
    let wrapper = shallow(<App/> )
    expect(wrapper.find("[data-test='app-component']").length).toBe(1)
  })
})