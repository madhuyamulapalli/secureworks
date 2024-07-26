export type RepositoryData = {
    repositoryOwner: RepositoryOwner
}

export type RepositoryOwner = {
    repositories: RepoData;
}

export type RepoData = {
    totalCount: number;
    pageInfo: {
      endCursor: string;
      hasNextPage: boolean;
    };
    nodes: RepoNode[];
  }

export type RepoNode = {
    id: string;
    name: string;
    stars: number;
    forks: number;
    created_at: string;
    organization: {
      login: string;
    };
    repo_url: string;
  }
  
