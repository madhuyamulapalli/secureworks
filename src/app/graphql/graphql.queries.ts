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

export { GET_REPOS }
