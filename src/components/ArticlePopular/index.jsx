import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularPost } from "../../store/postSlice";
import ArticleItem from "../ArticleItem";
import "./popular-news-list.css";
import { Link } from "react-router-dom";

function ArticlePopular() {
  const disaptch = useDispatch();
  const postsPopular = useSelector((state) => state.POST.postsPopular)

  const xhtml = postsPopular.map((item, index) => {
    return (
      <div key={index} className="popular-news__list--card">
        <ArticleItem
          data={item}
          isStyleCard
          isShowCategoies
          isShowDesc
        />
      </div>
    );
  });
  useEffect(() => {
    // fetch(
    //   "https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/posts?per_page=3&page=1&lang=vi&orderby=post_views"
    // )
    //   .then((res) => res.json())
    //   .then((result) => {
    //     disaptch(actPostPoPular(result))
    //   });

    disaptch(fetchPopularPost())
  }, []);

  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        {/* Main Title */}
        <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
          <h2>Popular Articles</h2>
          <Link to="/" className="btn btn-default">
            View More
          </Link>
        </div>
        {/* End Main Title */}
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              <div className="popular-news__list--card">
                <ArticleItem isStyleCard isShowCategoies isShowDesc data={postsPopular[0]} />
              </div>
              <div className="popular-news__list--card">
                <ArticleItem isStyleCard isShowCategoies isShowDesc data={postsPopular[1]} />
              </div>
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              {/* Popular news card */}
              <div className="popular-news__list--card">
                <ArticleItem isStyleCard isStyleRow isShowDesc  data={postsPopular[2]} />
              </div>
              {/* End Popular news card */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePopular;
