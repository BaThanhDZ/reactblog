/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle";
import "./latest-news-list.css";
import { useDispatch, useSelector } from "react-redux";
import { actPostNew } from "../../store/post/actions";

function ArticleLatest() {
  const dispatch = useDispatch()
  const postsNew = useSelector((state) => state.POST.postsNew)

  const xhtml = postsNew.map((item, index) => {
    return (
      <div key={index} className="latest-news__card">
        <ArticleItem data={item} />
      </div>
    );
  });

  useEffect(() => {
    fetch(
      "https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/posts?per_page=3&page=1&lang=vi"
    )
      .then((res) => res.json())
      .then((result) => {
        dispatch(actPostNew(result))
      });
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
