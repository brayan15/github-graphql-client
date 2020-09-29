import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'

describe('Header tests', () => {
  it('Should render Header component and it calls dispatch', async done => {
    const spy = jest.fn()

    jest.spyOn(React, 'useContext').mockImplementation(() => ({ dispatch: () => spy() }))

    const wrapper = shallow(<Header />)
    const header = wrapper.find('.header')
    const branding = wrapper.find('div').first().props()
    const search = wrapper.find('div').children().last().props()

    search.onSearch('test')

    expect(header.exists()).toBe(true)
    expect(branding.className).toBe('header__branding')
    expect(search.className).toBe('header__search')
    expect(spy).toHaveBeenCalled()
    done()
  }, 10000)
})
