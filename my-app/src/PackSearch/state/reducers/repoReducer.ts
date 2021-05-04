import { RepoActionType, RepoState } from "../../PackageSearcher.model";
import { RepoActions } from "../actions/repoActions";

const defaultRepoState: RepoState = {
  loading: false,
  error: null,
  data: [],
}

const reducer = (state: RepoState = defaultRepoState, action: RepoActions): RepoState => {
  switch (action.type) {
    case RepoActionType.SEARCH_REPO:
      return { loading: true, error: null, data: [] };

    case RepoActionType.SEARCH_REPO_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };

    case RepoActionType.SEARCH_REPO_FAILURE:
      return { ...state, loading: false, error: action.payload, data: [] };;

    default:
      return state;
  }
}

export default reducer;