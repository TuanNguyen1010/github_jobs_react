import React from 'react';
import { shallow } from 'enzyme'
import Job from './Job'

describe ('Jobs', () => {
  it('should render Job card', () => {
    const jobIdMock = '234'
    const job = {
      title: "software developer",
      created_at: 'Thu May 20 12:55:06 UTC 2020',
      how_to_apply: '[Apply here!](https://ltpx.nl/GAj5Rin)',
      company: "Valve+Meter",
      company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbGlHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--334813fb6cdfcc7de02ca4b49b7f98e22ed37528/Valve%20meter%20logo.png",
      description: "web Developer"
    }
    const wrapper = shallow(<Job key={jobIdMock} job={job}/>)

    expect(wrapper.find("[data-test='job-component']").length).toBe(1)
  })
})