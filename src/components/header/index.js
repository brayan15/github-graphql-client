// @flow
import React from 'react'
import { Input } from 'antd'
import { Layout } from 'antd'
import GithubContext from '../../contexts/githubContext'
import useFetchUser from '../../hooks/useFetchUser'
import {
  fetchUser,
  errorFetchUser,
  loadingFetchUser
} from '../../store/github/repositories/actions'

const Header = () => {
  const { dispatch } = React.useContext(GithubContext)
  const [fetchUserRepositories] = useFetchUser()

  const onSearch = (term: string) => {
    dispatch(loadingFetchUser())

    fetchUserRepositories(term).then(result => {
      if (result.hasError) {
        return dispatch(errorFetchUser())
      }
      
      const { user } = result

      return dispatch(fetchUser(user))
    })
  }

  return (
    <Layout.Header className='header'>
      <div className='header__branding'>
        <a href='/' className='header__branding-link'>
          Github GraphQL Client
        </a>
      </div>
      <div className='header__search-wrapper'>
        <Input.Search
          enterButton
          onSearch={onSearch}
          placeholder='Search user'
          className='header__search'
        />
      </div>
    </Layout.Header>
  )
}

export default Header
