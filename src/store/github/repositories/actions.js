// @flow
import type {UserT} from './types'

export const FETCH_USER = 'FETCH_USER'
export const LOADING_FETCH_USER = 'LOADING_FETCH_USER'
export const ERROR_FETCH_USER = 'ERROR_FETCH_USER'

export const fetchUser = (results: UserT) => ({
  type: FETCH_USER,
  payload: results
})

export const loadingFetchUser = () => ({
  type: LOADING_FETCH_USER
})

export const errorFetchUser = () => ({
  type: ERROR_FETCH_USER
})