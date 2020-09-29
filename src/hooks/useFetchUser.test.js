import { renderHook } from '@testing-library/react-hooks'
import restClient from '../services/rest-client'
import useFetchUser from './useFetchUser'

jest.mock('../services/rest-client')

describe('useFetchUser hook tests', () => {
  const originalError = console.error

  beforeAll(() => {
    console.error = (...args) => {
      if (/Warning./.test(args[0])) {
        return
      }
      originalError.call(console, ...args)
    }
  })

  afterAll(() => {
    console.error = originalError
  })

  beforeEach(() => {
    jest.setTimeout(10000)
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.resetAllMocks()
  })

  const mockUser = {
    user: {
      login: 'brayan'
    }
  }

  it('Hook Should return user data', async () => {
    restClient.getReposUser.mockImplementation(() => Promise.resolve(mockUser))
    const { result } = renderHook(() => useFetchUser())
    const fetchUser = result.current[0]

    fetchUser()

    await Promise.resolve() // wait until promise is solved
    
    expect(result.current[1]).toBe(true)
  }, 10000)

  it('Hook should return error', async () => {
    restClient.getReposUser.mockImplementation(() => Promise.reject())
    const { result } = renderHook(() => useFetchUser())
    const fetchUser = result.current[0]

    fetchUser()

    await Promise.resolve() // wait until promise is solved
    
    expect(result.current[1]).toBe(false)
  }, 10000)
  
})
