import React from 'react'
import { shallow } from 'enzyme'
import Table from './index'

const languagesMock = [
  {
    node: {
      name: 'JavaScript'
    }
  },
  {
    node: {
      name: 'CSS'
    }
  },
  {
    node: {
      name: 'HTML'
    },
  }
]

const simpleRepoMock = {
  edges: [
    {
      node: {
        name: 'test-project',
        description: 'Simple Slider project made in React Js from scratch',
        url: 'test/url',
        languages: {
          edges: []
        }
      }
    }
  ]
}

const languageRepoMock = {
  edges: [
    {
      node: {
        name: 'test-project',
        description: 'Simple Slider project made in React Js from scratch',
        url: 'test/url',
        languages: {
          edges: [
            ...languagesMock
          ]
        }
      }
    }
  ]
}

const renderMock = [
  {
    key: 1,
    name: 'test-project',
    description: 'Simple Slider project made in React Js from scratch',
    url: 'test/url',
    languages: ''
  }
]

const renderwithLanguageMock = [
  {
    key: 1,
    name: 'test-project',
    description: 'Simple Slider project made in React Js from scratch',
    url: 'test/url',
    languages: 'JavaScript,CSS,HTML'
  }
]

describe('Table tests', () => {
  it('Should render Table component and it doesnt return data on table', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      state: {
        user: null
      }
    }))

    const wrapper = shallow(<Table />)
    const content = wrapper.find('.table')
    const table = wrapper.find('div').children().last().props()

    expect(content.exists()).toBe(true)
    expect(table.dataSource).toEqual([])
  })

  it('Should render Table component and it returns one data on table', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      state: {
        user: {
          repositories: {
            ...simpleRepoMock
          }
        }
      }
    }))

    const wrapper = shallow(<Table />)
    const content = wrapper.find('.table')
    const table = wrapper.find('div').children().last().props()

    expect(content.exists()).toBe(true)
    expect(table.dataSource).toEqual(renderMock)
  })

  it('Should render Table component and it doesnt return data on table', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      state: {
        user: {
          repositories: {
            ...simpleRepoMock
          }
        }
      }
    }))

    const wrapper = shallow(<Table />)
    const content = wrapper.find('.table')
    const search = wrapper.find('div').children().first().children().last().children().props()

    search.onSearch('aja')

    const table = wrapper.find('div').children().last().props()

    expect(content.exists()).toBe(true)
    expect(table.dataSource).toEqual([])
  })

  it('Should render Table component and it returns languages', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      state: {
        user: {
          repositories: {
            ...languageRepoMock
          }
        }
      }
    }))

    const wrapper = shallow(<Table />)
    const content = wrapper.find('.table')
    const table = wrapper.find('div').children().last().props()

    expect(content.exists()).toBe(true)
    expect(table.dataSource).toEqual(renderwithLanguageMock)
  })
})
