// @flow
import React from 'react'
import { Table, Row, Col, Input, Spin, Space, notification } from 'antd'
import GithubContext from '../../contexts/githubContext'
import { getRepositories } from '../../store/github/repositories/selectors'
import {
  errorTitle,
  errorDescription,
  userNotFoundTitle,
  userNotFoundDescription,
  userNotHasProjectsTitle,
  userNotHasProjectsDescription
} from '../../const'

const TableRepositories = () => {
  const [term, setTerm] = React.useState('')
  const { state } = React.useContext(GithubContext)
  const isLoading = React.useMemo(() => state.loading, [state])
  const repositories = React.useMemo(() => {
    return getRepositories(state)
  }, [state])

  const columns = React.useMemo(() => {
    return [
      {
        title: 'Project Name',
        dataIndex: 'name',
        key: 'name',
        width: 200,
        sorter: (a, b) => (a.name < b.name ? 1 : -1),
        sortDirections: ['descend', 'ascend']
      },
      {
        title: 'Url',
        dataIndex: 'url',
        render: (url: string) => (
          <a href={url} target='_blank' without rel='noopener noreferrer'>
            {url}
          </a>
        ),
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
      },
      {
        title: 'Language',
        dataIndex: 'languages',
        key: 'languages'
      }
    ]
  }, [])

  const openNotification = (title: string, description: string, type: string = 'info') => {
    notification[type]({
      message: title,
      description
    })
  }

  React.useEffect(() => {
    if (state.user === null && !state.loading) {
      return openNotification(userNotFoundTitle, userNotFoundDescription)
    }

    if (
      state.user !== null &&
      !state.loading &&
      repositories.length === 0 &&
      state.user.repositories !== undefined
    ) {
      return openNotification(userNotHasProjectsTitle, userNotHasProjectsDescription)
    }

    if (state.error) {
      return openNotification(errorTitle, errorDescription, 'error')
    }
  }, [state, repositories])

  const repositoriesSerachResult = React.useMemo(() => {
    return repositories.filter(repository => repository.name.toLowerCase().includes(term))
  }, [term, repositories])

  const onSearchInput = value => {
    setTerm(value)
  }

  const avialableRepositories = term === '' ? repositories : repositoriesSerachResult

  return !isLoading ? (
    <div className='table'>
      <Row gutter={24} className='table__row-search'>
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
  ) : (
    <Space size='middle' className='spinner'>
      <Spin size='large' />
    </Space>
  )
}

export default TableRepositories
