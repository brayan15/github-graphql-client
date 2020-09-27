import React from 'react'
import { Layout } from 'antd'
import Header from './components/header'
import Footer from './components/footer'
import TableRepositories from './components/table'

import './styles/main.scss'

function App() {
  return (
    <div className='app'>
      <Layout>
        <Header />
        <Layout.Content className='container'>
          <br />
          <br />
          <br />
          <TableRepositories />
        </Layout.Content>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
