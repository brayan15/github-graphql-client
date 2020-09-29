import reducer from '../reducer'
import { FETCH_USER, LOADING_FETCH_USER, ERROR_FETCH_USER } from '../actions'

describe('Reducer Tests', () => {
  const initialState = {
    user: {},
    error: false,
    loading: false
  }

  test('Should return INITIAL_STATE', () => {
    const INITIAL_STATE = {}

    expect(reducer({}, {})).toEqual(INITIAL_STATE)
  })

  it('FETCH_USER case', () => {
    const userMock = {
      login: 'test',
      url: 'test/url'
    }

    const EXPECTED_STATE = {
      error: false,
      loading: false,
      user: { login: 'test', url: 'test/url' }
    }
    const DISPATCHED_ACTION = { type: FETCH_USER, payload: { ...userMock } }

    expect(reducer(initialState, DISPATCHED_ACTION)).toEqual(EXPECTED_STATE)
  })

  it('LOADING_FETCH_USER case', () => {
    const EXPECTED_STATE = {
      error: false,
      loading: true,
      user: {}
    }
    const DISPATCHED_ACTION = { type: LOADING_FETCH_USER, payload: {} }

    expect(reducer(initialState, DISPATCHED_ACTION)).toEqual(EXPECTED_STATE)
  })

  it('ERROR_FETCH_USER case', () => {
    const EXPECTED_STATE = {
      error: true,
      loading: false,
      user: {}
    }
    const DISPATCHED_ACTION = { type: ERROR_FETCH_USER, payload: {} }

    expect(reducer(initialState, DISPATCHED_ACTION)).toEqual(EXPECTED_STATE)
  })
})
