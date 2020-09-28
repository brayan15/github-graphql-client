import React from 'react'
import { Table, Row, Col, Input } from 'antd'

const TableRepositories = () => {
  const [term, setTerm] = React.useState('')
  const repositories = React.useMemo(() => {
    return [
      {
        key: '1',
        name: 'belloterio',
        url: 'https://github.com/brayan15/belloterio',
        description: ''
      },
      {
        key: '2',
        name: 'simple-slider',
        url: 'https://api.github.com/repos/brayan15/simple-slider',
        description: 'Simple Slider project made in React Js from scratch'
      },
      {
        key: '3',
        name: 'prueba-swapps',
        url: 'https://github.com/brayan15/prueba-swapps',
        description: 'Prueba realizada para el cargo de Fronted'
      }
    ]
  }, [])

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

  const onsearchInput = value => {
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
          <Input.Search placeholder='Search by project name' onSearch={onsearchInput} />
        </Col>
      </Row>
      <Table dataSource={avialableRepositories} columns={columns} size={'middle'} />
    </div>
  )
}

export default TableRepositories
