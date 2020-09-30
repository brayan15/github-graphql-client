// @flow
import type { StateT, NodeLanguajeT } from './types'

export const getRepositories = (state: StateT) => {
  let parseRepositories = []

  if (state.user !== null && state.user.repositories !== undefined) {
    // $FlowFixMe
    parseRepositories = state.user.repositories.edges.reduce((accumulator, currentValue, index) => {
      const { node } = currentValue
      const languages = getLanguages(node)

      const repos = [
        ...accumulator,
        {
          key: index + 1,
          name: node.name,
          description: node.description,
          url: node.url,
          languages: languages.join(',')
        }
      ]

      return repos
    }, [])
  }

  return parseRepositories
}

const getLanguages = (node: NodeLanguajeT) => {
  let languages = []

  languages = node.languages.edges.reduce((accLanguage, currentLanguage) => {
    const { node } = currentLanguage

    const lang = [...accLanguage, node.name]

    return lang
  }, [])

  return languages
}
