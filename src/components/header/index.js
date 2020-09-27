import React from 'react'
import { Input } from 'antd'
import { Layout } from 'antd'

const Header = () => {
  return (
    <Layout.Header className='header'>
      <div className='header__branding'>
        <a href='/' className='header__branding-link'>
          Github GraphQL Client
        </a>
      </div>
      <div className='header__search-wrapper'>
        <Input.Search className='header__search' placeholder='Search user' enterButton />
      </div>
    </Layout.Header>
  )
}

export default Header
