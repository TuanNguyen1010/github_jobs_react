import React from 'react';
import SearchForm from './SearchForm';
import {shallow} from 'enzyme';

describe('render searchForm', () => {
  it('render search form', () => {
    const params = 'nothing'
    const setParams = jest.fn()
    const wrapper = shallow(<SearchForm 
    params={params}
    setParams={setParams}/>)

    expect(wrapper.find("[data-test='SearchForm-component']").length).toBe(1)
  })
})