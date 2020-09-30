// @flow
import restClient from "../services/rest-client"

const useFetchUser = () => {
  const fetchUserRepositories = async (user: string) => {
    try {
      return await restClient.getReposUser(user)
    } catch (error) {

      return { hasError: true }
    }
  }

  return [fetchUserRepositories]
}

export default useFetchUser
