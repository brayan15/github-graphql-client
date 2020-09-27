import axios from 'axios'
import clientQueries from '../queries'

class RestClient {
  constructor() {
    this._authApi = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `bearer ${process.env.REACT_APP_PERSONAL_TOKEN}`
       }
    })
  }

  /**
   * Get repositories of user from api
   * @param  {string} user name user github
   * @return {json}  with query data
   */

  getReposUser = user => {
    return this._authApi
      .post('graphql', {
        query: clientQueries.queries.getUser,
        variables: {
          login: user
        }
      })
      .then(({ data }) => data.data)
      .catch(error => console.error(error))
  }
}

const restClient = new RestClient()

export default restClient
