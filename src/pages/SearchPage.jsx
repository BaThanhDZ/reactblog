import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ArticleItem from "../components/ArticleItem";
import Button from "../components/shared/Button";
import MainTitle from "../components/shared/MainTitle";
import { fetchSearch } from "../store/searchSlice";
import { alertSuccess } from '../helpers/toastify'

function SearchPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const valueSearch  = searchParams.get('keyword');
  const itemSearch = useSelector((state) => state.SEARCH.valueSearch);
  
  if (valueSearch === "") {
    alertSuccess("Mời nhập từ khóa tìm kiếm");
    return <></>
  }
  
  useEffect(() => {
    dispatch(fetchSearch(valueSearch))
  }, [valueSearch])
  
  
  
  const xhtml = itemSearch.map((item, index) => {
      return (
        <div key={index} className="tcl-col-12 tcl-col-md-8">
          <ArticleItem 
            valueSearch={valueSearch}
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