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
  data,
}) {
  const classes = cls("article-item", {
    "style-card": isStyleCard,
    "style-row": isStyleRow,
  });

  if (!data) return <></>;

  const title = data.title.rendered;
  const date = data.date;
  const name = data.author_data.nickname;
  const avatar = data.author_data.avatar;
  const image = data.featured_media_url;
  const link = data.link;
  const view = data.view_count;
  const desc = data.excerpt.rendered;
  const categories = data.categories;
  const slug = data.slug;
  

  // eslint-disable-next-line no-unused-vars

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
