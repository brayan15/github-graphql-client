// @flow
import React from 'react' 
import restClient from "../services/rest-client"

const useFecthUser = () => {
  const [resolved, setResolved] = React.useState(false)

  const fetchUSer = async (user: string) => {
    try {
      setResolved(true)

      return await restClient.getReposUser(user)
    } catch (error) {
      setResolved(false)

      return { hasError: true }
    }
  }

  return [fetchUSer, resolved]
}

export default useFecthUser
