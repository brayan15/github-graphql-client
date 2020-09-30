import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'
import restClient from '../../services/rest-client'
import useFetchUser from '../../hooks/useFetchUser'
import { renderHook } from '@testing-library/react-hooks'

jest.mock('../../services/rest-client')

describe('Header tests', () => {
  it('Should render Header component', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({ dispatch: () => {} }))
    const wrapper = shallow(<Header />)
    const header = wrapper.find('.header')
    const branding = wrapper.find('div').first().props()
    const search = wrapper.find('div').children().last().props()

    expect(header.exists()).toBe(true)
    expect(branding.className).toBe('header__branding')
    expect(search.className).toBe('header__search')
  })
  
  it('Should call success dispatch', async done => {
    restClient.getReposUser.mockImplementation(() => Promise.resolve({}))
    const { result } = renderHook(() => useFetchUser())
    const fetchUser = result.current[0]
    const spy = jest.fn()

    jest.spyOn(React, 'useContext').mockImplementation(() => ({ dispatch: () => spy() }))

    const wrapper = shallow(<Header />)
    const search = wrapper.find('div').children().last().props()

    search.onSearch('test')

    fetchUser()

    await Promise.resolve() // wait until promise is solved

    expect(spy).toHaveBeenCalled()
    done()
  }, 10000)

  it('Should call error dispatch', async done => {
    restClient.getReposUser.mockImplementation(() => Promise.reject({}))
    const { result } = renderHook(() => useFetchUser())
    const fetchUser = result.current[0]
    const spy = jest.fn()

    jest.spyOn(React, 'useContext').mockImplementation(() => ({ dispatch: () => spy() }))

    const wrapper = shallow(<Header />)
    const search = wrapper.find('div').children().last().props()

    search.onSearch('test')

    fetchUser()

    await Promise.resolve() // wait until promise is solved

    expect(spy).toHaveBeenCalled()
    done()
  }, 10000)
})
