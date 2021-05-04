export enum RepoActionType {
  SEARCH_REPO = 'SEARCH_REPO',
  SEARCH_REPO_SUCCESS = 'SEARCH_REPO_SUCCESS',
  SEARCH_REPO_FAILURE = 'SEARCH_REPO_FAILURE',
}

export interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}


