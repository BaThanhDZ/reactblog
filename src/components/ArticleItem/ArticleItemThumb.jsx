export default function ArticleItemThumb(props) {
  return (
    <div className="article-item__thumbnail">
      <a href="/">
        <img src={props.image} alt={props.image} />
      </a>
    </div>
  );
}
