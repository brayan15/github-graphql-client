// @flow
import * as React from 'react'
import GithubContext from '../../contexts/githubContext'
import reducer, { initialState } from '../../store/github/repositories/reducer'

type PropsT = {
  children: React.Node
}

const HomeContext = ({ children }: PropsT) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return <GithubContext.Provider value={{ state, dispatch }}>{children}</GithubContext.Provider>
}

export default HomeContext
