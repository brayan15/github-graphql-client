import React from 'react'
import { shallow } from 'enzyme'
import GithubContext from '../../contexts/githubContext'
import HomeContext from '.'

describe('GithubContext.Provider tests', () => {
  it('Should render component calling Home component', () => {
    const wrapper = shallow(
      <HomeContext>
        <p>Hello</p>
      </HomeContext>
    )

    const EXPECTED_INITIAL_STATE = {
      error: false,
      loading: false,
      user: {}
    }

    expect(wrapper.props().value.state).toEqual(EXPECTED_INITIAL_STATE)
    expect(wrapper.children().text()).toBe('Hello')
  })

  it('Should render component calling GithubContext', () => {
    const GithubContextComponent = () => (
      <GithubContext.Provider value={{ state: {} }}>
        <p>Test of GithubContext</p>
      </GithubContext.Provider>
    )
    const wrapper = shallow(<GithubContextComponent />)

    expect(wrapper.props().value.state).toEqual({})
    expect(wrapper.children().text()).toBe('Test of GithubContext')
  })
})
