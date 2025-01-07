import { Link } from "react-router-dom";

export default function ArticleItemTitle(props) {
  const { slug, title } = props;

  return (
    <h2 className="article-item__title">
      <Link to={`post/${slug}`}>{title}</Link>
    </h2>
  );
}
