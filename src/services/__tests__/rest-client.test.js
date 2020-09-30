import restClient from '../rest-client'

jest.mock('../rest-client')

describe('Service tests', () => {
    const mockUser = {
      user: {
        login: 'brayan'
      }
    }

    const mockError = {
      error: {
        status: 400
      }
    }
  
    it('restClient should respond ok', () => {
      restClient.getReposUser.mockImplementation(() => Promise.resolve(mockUser))
      restClient.getReposUser().then(response => {
        expect(response).toEqual(mockUser)
      })
    })
    
    it('restClient should fail', () => {
      restClient.getReposUser.mockImplementation(() => Promise.reject(mockError))
      restClient.getReposUser().catch(error => {
        expect(error).toEqual(mockError)
      })
    })
  })