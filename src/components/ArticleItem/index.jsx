import cls from "classnames";
import ArticleItemCategories from "./ArticleItemCategories";
import ArticleItemDesc from "./ArticleItemDesc";
import ArticleItemInfo from "./ArticleItemInfo";
import ArticleItemStats from "./ArticleItemStats";
import ArticleItemThumb from "./ArticleItemThumb";
import ArticleItemTitle from "./ArticleItemTitle";
import "./article-item.css";

export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
  // title, name, date, image, avatar, link, desc, view, status,
  data, valueSearch
}) {
  const classes = cls("article-item", {
    "style-card": isStyleCard,
    "style-row": isStyleRow,
  });

  if (!data) return <></>;
  
  const name = data.author_data.nickname;
  const avatar = data.author_data.avatar;
  const image = data.featured_media_url;
  const view = data.view_count;
  const desc = data.excerpt.rendered;
  const categories = data.categories;
  const slug = data.slug;
  const date =data.date;

  // xử lý trường hợp highligh từ khóa khi search
  const regex = new RegExp(valueSearch, 'gi');
  let title = data.title.rendered
  if(valueSearch) {
    title = title.replace(regex, (match) => `<mark>${match}</mark>`);
    title = title.replace('<mark>', '');
    title = title.replace('</mark>', '');
  }
  
  // <div dangerouslySetInnerHTML={{ __html: props.content }} />


  return (
    <article className={classes}>
      <ArticleItemThumb image={image} />
      <div className="article-item__content">
        {isShowCategoies && <ArticleItemCategories categories={categories} />}
        {isShowCategoies && <ArticleItemStats view={view} />}

        <ArticleItemTitle slug={slug} title={title} />

        {isShowDesc && <ArticleItemDesc desc={desc} />}

        <ArticleItemInfo
          name={name}
          date={date}
          avatar={avatar}
          isShowAvatar={isShowAvatar}
        />
      </div>
    </article>
  );
}
