import { useSelector } from 'react-redux';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const listCategory = useSelector((state) => state.CATEGORY.categoryList);
  
  let xhtml = listCategory.map((item, index) => {
    if(index < 5) {
      return (
        <li key={index}>
          <Link to="/">{item.name}</Link>
        </li>
      )
    }
    
  })
  
  return (
    <footer id="footer" className="bg-white">
      <div className="tcl-container">
        <div className="footer">
          <div className="tcl-row">
            {/* Footer Column */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
              <div className="footer-logo">
                <img src="/assets/images/logo.png" alt="NuxtBlog Logo" />
              </div>
              <p>© 2020, All Rights Reserved.</p>
            </div>
            {/* Footer Column */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
              <div className="footer-title">
                <p>Categories</p>
              </div>
              <ul className="footer-content__list">
                {xhtml}
              </ul>
            </div>
            {/* Footer Column */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
              <div className="footer-title">
                <p>Liên hệ</p>
              </div>
              <ul className="footer-content__list">
                <li>Số 01, Khối A1, Toà nhà Đạt Gia, 43 Đường Cây Keo, Tam Phú, Thủ Đức, Hồ Chí Minh</li>
                <li>0383 308 983</li>
              </ul>
            </div>
            {/* Footer Column */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
              <div className="footer-title">
                <p>Fanpage</p>
              </div>
              <div className="footer-facebook">
                <div
                  className="fb-page"
                  data-href="/"
                  data-tabs
                  data-width
                  data-height
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote cite="/" className="fb-xfbml-parse-ignore">
                    <Link to="/">Học Lập Trình Web Thông Qua Projects Thực Tế</Link>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
