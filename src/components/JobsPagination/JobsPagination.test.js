import React from 'react';
import { shallow } from 'enzyme'
import JobsPagination from './JobsPagination'

describe('Job pagination', () => {

  const setPage = jest.fn()
  const hasNextPage = false
  const hasNextPageTrue = true
  const page = 1
  it('renders Jobs pagination component', () => {
    const wrapper = shallow(<JobsPagination 
      page = {page}
      setPage ={setPage}
      hasNextPage ={hasNextPage}/>)

    expect(wrapper.find("[data-test='JobsPagination-component']").length).toBe(1)
    expect(wrapper.find("[data-test='JobsPagination-current-page']").text()).toEqual(page.toString())
    expect(wrapper.find("[data-test='JobsPagination-next-button']").text()).toBe('')
  })

  it('should not display previous button or previous page number', () => {
    const wrapper = shallow(<JobsPagination 
      page = {page}
      setPage ={setPage}
      hasNextPage ={hasNextPage}/>)

    expect(wrapper.find("[data-test='JobsPagination-back-button']").text()).toBe('')
    expect(wrapper.find("[data-test='JobsPagination-first-page']").text()).toBe('')
  })

  it('should display previous button and page number on page 4', () => {
    const page_4 = 4
    const wrapper = shallow(<JobsPagination 
      page = {page_4}
      setPage ={setPage}
      hasNextPage ={hasNextPage}/>)

    expect(wrapper.find("[data-test='JobsPagination-back-button']").text()).toBe('<Prev />')
    expect(wrapper.find("[data-test='JobsPagination-first-page']").text()).toBe('1')
  })

  it('should display next button and next page number', () => {
    const wrapper = shallow(<JobsPagination 
      page = {page}
      setPage ={setPage}
      hasNextPage ={hasNextPageTrue}/>)

    expect(wrapper.find("[data-test='JobsPagination-next-button']").text()).toBe('<Next />')
    expect(wrapper.find("[data-test='JobsPagination-next-page']").text()).toBe((page+1).toString())
  })
})