// @flow
type LanguajeT = {
  node: {
    name: string,
  }
}

export type NodeLanguajeT = {
  languages: {
    edges: Array<LanguajeT>
  }
}

type RepositoryT = {
  node: {
    name: string,
    description: string,
    url: string,
    languages: {
      edges: Array<LanguajeT>
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