// @flow
import type { StateT, ActionT } from './types'
import { ERROR_FETCH_USER, FETCH_USER, LOADING_FETCH_USER } from './actions'

export const initialState = {
  user: {},
  error: false,
  loading: false
}

const reducer = (state: StateT, { type, payload }: ActionT) => {
  switch (type) {
    case FETCH_USER: {
      return {
        ...state,
        user: payload,
        loading: false,
        error: false
      }
    }
    case LOADING_FETCH_USER: {
      return {
        ...state,
        loading: true,
        error: false
      }
    }
    case ERROR_FETCH_USER: {
      return {
        ...state,
        error: true,
        loading: false
      }
    }
    default:
      return state
  }
}

export default reducer
