import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGeneralPost } from '../../store/postSlice';
import ArticleItem from '../ArticleItem';
import Button from '../shared/Button';
import MainTitle from '../shared/MainTitle';

function ArticleGeneral() {
  const dispatch = useDispatch();
  const postsGeneral = useSelector((state) => state.POST.postsGeneral);
  const totalPageGeneral = parseInt(useSelector((state) => state.POST.totalPageGeneral))
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    // fetch(`https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/posts?per_page=2&page=${pageNumber}&lang=vi`)
    // .then((res) => res.json()).then((result) => {
    //   dispatch(actPostGeneral(result));
    // })

    dispatch(fetchGeneralPost(pageNumber))
  }, [pageNumber])

  const xhtml = postsGeneral.map((item, index) => {
    return (
      <div key={index} className="tcl-col-12 tcl-col-md-6">
          <ArticleItem 
            isStyleCard 
            isShowAvatar={false}
            data={item}
          />
      </div>
    )
  })
  function handleLoadMore() {
    setPageNumber(pageNumber + 1)
  }
  const buttonLoadMore = 
    pageNumber === totalPageGeneral ? 
      "" : <Button onClick={handleLoadMore} type="primary" size="large" loading={true}>Tải thêm</Button>;

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bai Viet Tong Hop</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
         {xhtml}
        </div>
        {/* End Row News List */}
        <div className="text-center">
          {buttonLoadMore}
        </div>
      </div>
    </div>
  );
}

export default ArticleGeneral;
