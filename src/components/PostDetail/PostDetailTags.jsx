import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetTag } from "../../store/tag/actions";

function PostDetailTags(props) {
  const dispatch = useDispatch();
  const {tags} = props;
  const tagList = useSelector((state) => state.TAG.tagList);
  
  
  useEffect(() => {
    fetch(
          "https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/tags?per_page=3&page=1&lang=vi&post=18"
        )
          .then((res) => res.json())
          .then((result) => {
            dispatch(actGetTag(result))
          });
  }, []);

  if(tagList.length === 0) return <></>

  const arrayTag = [];
  tags.forEach((tagName) => {
    const tagItem = tagList.find((item) => item.id === tagName);
    arrayTag.push(tagItem)
  });
  
  // const xhtml = arrayTag.map((item, index) => (
  //   <li key={index} className="item"><a href="/" className="btn btn-default">{item.name}</a></li>
  // ));
  
  
  return (
    <div className="post-detail__tags">
      <h2>Tags</h2>
      <ul>
        {/* {xhtml} */}
        <li className="item"><a href="/" className="btn btn-default">HTML</a></li>
        <li className="item"><a href="/" className="btn btn-default">CSS3</a></li>
        <li className="item"><a href="/" className="btn btn-default">React</a></li>
        <li className="item"><a href="/" className="btn btn-default">Vue</a></li>
      </ul>
    </div>
  )
}

export default PostDetailTags