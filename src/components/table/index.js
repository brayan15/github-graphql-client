// @flow
import React from 'react'
import { Table, Row, Col, Input } from 'antd'
import GithubContext from '../../contexts/githubContext'

const TableRepositories = () => {
  const [term, setTerm] = React.useState('')
  const { state } = React.useContext(GithubContext)
  const repositories = React.useMemo(() => {
    let parseRepositories = []

    if (state.user !== null && state.user.repositories !== undefined) {
      parseRepositories = state.user.repositories.edges.reduce(
        (accumulator, currentValue, index) => {
          const { node } = currentValue
          let languages = []

          if (node.languages.edges.length > 0) {
            languages = node.languages.edges.reduce((accLanguage, currentLanguage) => {
              const { node } = currentLanguage

              const lang = [...accLanguage, node.name]

              return lang
            }, [])
          }

          const repos = [
            ...accumulator,
            {
              key: index + 1,
              name: node.name,
              description: node.description,
              url: node.url,
              languages: languages.join(',')
            }
          ]

          return repos
        },
        []
      )
    }

    return parseRepositories
  }, [state])

  const columns = React.useMemo(() => {
    return [
      {
        title: 'Project Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => (a.name < b.name ? 1 : -1),
        sortDirections: ['descend', 'ascend']
      },
      {
        title: 'Url',
        dataIndex: 'url',
        key: 'url',
        sorter: (a, b) => (a.url < b.url ? 1 : -1),
        sortDirections: ['descend', 'ascend']
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        sorter: (a, b) => (a.description < b.description ? 1 : -1),
        sortDirections: ['descend', 'ascend']
      }
    ]
  }, [])

  const repositoriesSerachResult = React.useMemo(() => {
    return repositories.filter(repository => repository.name.toLowerCase().includes(term))
  }, [term, repositories])

  const onSearchInput = value => {
    setTerm(value)
  }

  const avialableRepositories = term === '' ? repositories : repositoriesSerachResult

  return (
    <div className='table'>
      <Row gutter={24}>
        <Col xs={24} sm={12} md={16} lg={18}>
          <p>You can see search results:</p>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Input.Search
            className='table__search'
            onSearch={onSearchInput}
            placeholder='Search by project name'
          />
        </Col>
      </Row>
      <Table dataSource={avialableRepositories} columns={columns} size={'middle'} />
    </div>
  )
}

export default TableRepositories
