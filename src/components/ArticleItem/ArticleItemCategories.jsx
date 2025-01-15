import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ArticleItemCategories(props) {
  const categoryList = useSelector((state) => state.CATEGORY.categoryList);
  const { categories } = props;
  
  if (categoryList.length === 0) return <></>;
  const result = [];
  // duyet id
  categories.forEach((categoryId) => {
    const categoryItem = categoryList.find((item) => item.id === categoryId);
    result.push(categoryItem);
    
  });

  // /category/fe
  // /category/vuejs
  const xhtml = result.map((item, index) => (
    <li key={index}>
      <Link to="/" className="btn btn-category">
        {item.name}
      </Link>
    </li>
  ));

  return <ul className="article-item__categories">{xhtml}</ul>;
}
