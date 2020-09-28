import restClient from './rest-client'

jest.mock('./rest-client')

describe('Service Tests', () => {
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
  
    it('restClient should responds ok', () => {
      restClient.getReposUser.mockImplementation(() => Promise.resolve(mockUser))
      restClient.getReposUser().then(response => {
        expect(response).toEqual(mockUser)
      })
    })
    
    it('restClient should fails', () => {
      restClient.getReposUser.mockImplementation(() => Promise.reject(mockError))
      restClient.getReposUser().catch(error => {
        expect(error).toEqual(mockError)
      })
    })
  })