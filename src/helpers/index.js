import API from "../services/api";
import { actPostNew } from "../store/post/actions";

export function fetchLatestArticles(dispatch) {
  API.call()
    .get("wp/v2/posts?per_page=3&page=1&lang=vi")
    .then((res) => {
      dispatch(actPostNew(res.data));
    });
}
