import React from 'react'
import { Layout } from 'antd'
import HomeContext from './views/Home'
import Header from './components/header'
import Footer from './components/footer'
import TableRepositories from './components/table'

import './styles/main.scss'

function App() {
  return (
    <div className='app'>
      <Layout className='app__layout'>
        <HomeContext>
          <Header />
          <Layout.Content className='container'>
            <TableRepositories />
          </Layout.Content>
          <Footer />
        </HomeContext>
      </Layout>
    </div>
  )
}

export default App
