import axios from "axios";
import { Dispatch } from 'redux';
import { RepoActionType } from "../../PackageSearcher.model";
import { RepoActions } from "../actions/repoActions";

export const searchRepo = (term: string) => {
  return async (dispatch: Dispatch<RepoActions>) => {
    dispatch({ type: RepoActionType.SEARCH_REPO });

    try {
      const { data } = await axios.get(`http://registry.npmjs.org/-/v1/search?`, { params: { text: term } });

      const names = data.objects.map((result: any) => {
        return result.package.name;
      })

      dispatch({ type: RepoActionType.SEARCH_REPO_SUCCESS, payload: names });
    } catch (error) {
      dispatch({ type: RepoActionType.SEARCH_REPO_FAILURE, payload: error.message });
    }
  }
}