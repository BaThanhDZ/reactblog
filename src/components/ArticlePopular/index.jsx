import { useEffect } from "react";
import ArticleItem from "../ArticleItem";
import "./popular-news-list.css";
import { useDispatch, useSelector } from "react-redux";
import { actPostPoPular } from "../../store/post/actions";

function ArticlePopular() {
  const disaptch = useDispatch();
  const postsPopular = useSelector((state) => state.POST.postsPopular)

  useEffect(() => {
    fetch(
      "https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/posts?per_page=3&page=1&lang=vi&orderby=post_views"
    )
      .then((res) => res.json())
      .then((result) => {
        disaptch(actPostPoPular(result))
      });
  }, []);

  const xhtml = postsPopular.map((item, index) => {
    return (
      <div key={index} className="popular-news__list--card">
        <ArticleItem
          data={item}
          // title={item.title.rendered}
          // desc={item.excerpt.rendered}
          // image={item.featured_media_url}
          // avatar={item.author_data.avatar}
          // date={item.date}
          // name={item.author_data.nickname}
          // link={item.link}
          // view={item.view_count}
          // status={item.status}
          isStyleCard
          isShowCategoies
          isShowDesc
        />
      </div>
    );
  });

  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        {/* Main Title */}
        <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
          <h2>Popular Articles</h2>
          <a href="/" className="btn btn-default">
            View More
          </a>
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
