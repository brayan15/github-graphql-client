// @flow
import React from 'react' 
import restClient from "../services/rest-client"

const useFetchUser = () => {
  const [resolved, setResolved] = React.useState(false)

  const fetchUserRepositories = async (user: string) => {
    try {
      setResolved(true)

      return await restClient.getReposUser(user)
    } catch (error) {
      setResolved(false)

      return { hasError: true }
    }
  }

  return [fetchUserRepositories, resolved]
}

export default useFetchUser
