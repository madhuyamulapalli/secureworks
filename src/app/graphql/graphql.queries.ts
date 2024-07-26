import { gql } from 'apollo-angular'

const GET_REPOS = gql`
query getRepos($username: String!) {
  repositoryOwner(login: $username) {
      repositories(first: 100) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          name
          stars: stargazerCount
          forks: forkCount
          created_at: createdAt          
          organization: owner {
            login
          }
          repo_url: url
        }
      }
    }
}
`

const ADD_TODO = gql`
  mutation addTodo($name: String!, $description: String!) {
    addTodo(name: $name, description: $description) {
      id
      name
      description
    }
  }
`

const DELETE_TODO = gql`
  mutation deleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      id
    }
  }
  `

export { GET_REPOS, ADD_TODO, DELETE_TODO }
