// @flow
type LanguajeT = {
  node: {
    name: string,
  }
}

type RepositoryT = {
  node: {
    name: string,
    description: string,
    url: string,
    languages: {
      edge?: Array<LanguajeT>
    }
  }
}

export type UserT = {
  login?: string,
  url?: string,
  repositories?: {
    edges?: Array<RepositoryT>
  }
}

export type StateT = {
  user:UserT,
  error: boolean,
  loading: boolean
}

export type ActionT = {
  type: string,
  payload: any
}