import { RepoActionType } from "../../PackageSearcher.model";

export interface SEARCH_REPO {
  type: RepoActionType.SEARCH_REPO;
}

export interface SEARCH_REPO_SUCCESS {
  type: RepoActionType.SEARCH_REPO_SUCCESS;
  payload: string[];
}

export interface SEARCH_REPO_FAILURE {
  type: RepoActionType.SEARCH_REPO_FAILURE;
  payload: string;
}

export type RepoActions = SEARCH_REPO | SEARCH_REPO_SUCCESS | SEARCH_REPO_FAILURE;