import Button from "../components/shared/Button";
import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function SearchPage() {
  const [itemSearch, setItemSearch] = useState([]);
  let valueSearch = useSelector((state) => state.SEARCH.valueSearch);
  console.log(valueSearch);
  
  
  useEffect(() => {
    fetch(
      `https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/posts?per_page=100&page=1&search=${valueSearch}&lang=vi`
    ) .then((res) => res.json()).then((result) => {
        console.log(result);
        setItemSearch(result)
      });
  }, [valueSearch])
  

  const xhtml = itemSearch.map((item, index) => {
      return (
        <div key={index} className="tcl-col-12 tcl-col-md-8">
          <ArticleItem 
            data={item}
            isStyleCard 
            isShowCategoies 
            isShowAvatar={false} 
            isShowDesc={false} 
          />
        </div>
      );
    });
  
  return (
    <div className="articles-list section">
      <div className="tcl-container">
  
        <MainTitle type="search">{itemSearch.length} kết quả tìm kiếm với từ khóa "{valueSearch}"</MainTitle>
        
        <div className="tcl-row tcl-jc-center">
          {xhtml}
        </div>

        <div className="text-center">
          <Button type="primary" size="large">Tải thêm</Button>
        </div>
      </div>
    </div>

  )
}

export default SearchPage