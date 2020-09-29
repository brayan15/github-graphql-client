import { errorFetchUser, ERROR_FETCH_USER, fetchUser, FETCH_USER, loadingFetchUser, LOADING_FETCH_USER } from '../actions'

describe('Actions tests', () => {
  it('fetchUser action', () => {
    const EXPECTED_ACTION = { payload: {}, type: FETCH_USER }

    expect(fetchUser({})).toEqual(EXPECTED_ACTION)
  })

  it('loadingFetchUser action', () => {
    const EXPECTED_ACTION = { type: LOADING_FETCH_USER }

    expect(loadingFetchUser()).toEqual(EXPECTED_ACTION)
  })
  
  it('errorFetchUser action', () => {
    const EXPECTED_ACTION = { type: ERROR_FETCH_USER }

    expect(errorFetchUser()).toEqual(EXPECTED_ACTION)
  })
})
