import { useEffect } from 'react';
import ArticleItem from '../ArticleItem';
import Button from '../shared/Button';
import MainTitle from '../shared/MainTitle';
import { useDispatch, useSelector } from 'react-redux';
import { actPostGeneral } from '../../store/post/actions';

function ArticleGeneral() {
  const dispatch = useDispatch();
  const postsGeneral = useSelector((state) => state.POST.postsGeneral)

  useEffect(() => {
    fetch("https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/posts?per_page=2&page=1&lang=vi")
    .then((res) => res.json()).then((result) => {
      dispatch(actPostGeneral(result))
    })
  }, [])

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
          <Button type="primary" size="large" loading={true}>
            Tải thêm
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ArticleGeneral;
