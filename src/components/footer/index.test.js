import React from 'react'
import { shallow } from 'enzyme'
import Footer from './index'

describe('Footer tests', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Footer />)
  })

  it('Should render Footer component', () => {
    const footer = wrapper.find('.footer')
    
    expect(footer.exists()).toBe(true)
  })
})
