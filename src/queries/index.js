const clientQueries = {
  queries: {
    getUser: `
    query getUser($login: String!){
      user(login: $login) {
        login
        url
        repositories(first:50, orderBy: {field:CREATED_AT, direction:DESC}){
          edges {
            node {
              name
              description
              url
              languages(first:50){
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }`
  }
}

export default clientQueries
