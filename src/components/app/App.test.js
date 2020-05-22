import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';

Enzyme.configure({adapter: new EnzymeAdaptor() })

describe('testing main app', () => {
  it('should render the main app component', () => {
    let wrapper = shallow(<App/> )
    expect(wrapper.find("[data-test='app-component']").length).toBe(1)
  })
})