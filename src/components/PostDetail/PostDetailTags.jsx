import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function PostDetailTags(props) {
  const { tags } = props;
  const tagList = useSelector((state) => state.TAG.tagsList);
  

  if (tagList.length === 0) return <></>;
  let arrayTag = [];

  for (let i = 0; i < tagList.length; i++) {
    const tagItem = tagList.find((item) => item.id === tags[i]);
    arrayTag.push(tagItem);
  }

  // tags.forEach((tagId) => {
  //   const tagItem = tagList.find((item) => item.id === tagId);
  //   arrayTag.push(tagItem);
  // });
  const xhtml = arrayTag.map((item, index) => (
    <li key={index} className="item">
      <Link to="/" className="btn btn-default">
        {item.name}
      </Link>
    </li>
  ));

  return (
    <div className="post-detail__tags">
      <h2>Tags</h2>
      <ul>
        {xhtml}
        {/* <li className="item"><a href="/" className="btn btn-default">HTML</a></li>
        <li className="item"><a href="/" className="btn btn-default">CSS3</a></li>
        <li className="item"><a href="/" className="btn btn-default">React</a></li>
        <li className="item"><a href="/" className="btn btn-default">Vue</a></li> */}
      </ul>
    </div>
  );
}

export default PostDetailTags;
