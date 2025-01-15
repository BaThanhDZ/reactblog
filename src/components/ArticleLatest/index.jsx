/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestPosts } from "../../store/postSlice";
import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle";
import "./latest-news-list.css";

function ArticleLatest() {
  const dispatch = useDispatch();
  const postsNew = useSelector((state) => state.POST.postsNew);

  const xhtml = postsNew.map((item, index) => {
    return (
      <div key={index} className="latest-news__card">
        <ArticleItem data={item} />
      </div>
    );
  });

  useEffect(() => {
    // API.call()
    //   .get("wp/v2/posts?per_page=3&page=1&lang=vi")
    //   .then((res) => {
    //     dispatch(actPostNew(res.data));
    //   });
    // fetchLatestArticles(dispatch);

    dispatch(fetchLatestPosts());
  }, []);

  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle>Bài viết mới</MainTitle>
        <div className="latest-news__list spacing">{xhtml}</div>
      </div>
    </div>
  );
}

export default ArticleLatest;
