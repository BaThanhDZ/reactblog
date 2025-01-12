import { useSelector } from "react-redux";

export default function ArticleItemCategories(props) {
  const categoryList = useSelector((state) => state.CATEGORY.list);
  const { categories } = props;
  
  if (categoryList.length === 0) return <></>;

  const result = [];
  // duyet id
  categories.forEach((categoryId) => {
    const categoryItem = categoryList.find((item) => item.id === categoryId);
    result.push(categoryItem);
    
  });

  const xhtml = result.map((item, index) => (
    <li key={index}>
      <a href="/" className="btn btn-category">
        {item.name}
      </a>
    </li>
  ));

  // const xhtml = result.map((item, index) => {
  //   // todo 1
  //   // todo 2
  //   return (
  //     <li key={index}>
  //       <a href="/" className="btn btn-category">
  //         {item.name}
  //       </a>
  //     </li>
  //   );
  // });

  return <ul className="article-item__categories">{xhtml}</ul>;
}
