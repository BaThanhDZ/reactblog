import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostDetailContent from "../components/PostDetail/PostDetailContent";
import PostDetailHead from "../components/PostDetail/PostDetailHead";
import PostDetailSidebar from "../components/PostDetail/PostDetailSidebar";
import {
  actGetIDPost,
  actGetSlug,
  actPostRelated,
} from "../store/post/actions";
import { actGetTag } from "../store/tag/actions";

function PostDetailPage() {
  const params = useParams();
  const dispatch = useDispatch();
  // const [post, setPost] = useState(null);
  const post = useSelector((state) => state.POST.idPost);

  //call api lay bai viet thong qua slug
  useEffect(() => {
    fetch(
      `https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/posts?slug=${params.slug}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result && result.length > 0) {
          // setPost(result[0]);
          dispatch(actGetIDPost(result));
          dispatch(actGetSlug(result));
        } else {
          // setPost(null)
          dispatch(actGetIDPost(null));
        }
      });
  }, [params.slug]);

  // call API lấy bài viết cùng danh mục thông qua tác giả và id
  useEffect(() => {
    if (post === null) return;
    fetch(
      `https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/posts?per_page=3&page=1&author=${post.author}&lang=vi&exclude=${post.id}`
    )
      .then((res) => res.json())
      .then((result) => {
        dispatch(actPostRelated(result));
      });
  }, [post]);

  // call API lấy TAG thông qua id bài viết
  useEffect(() => {
    if (post === null) return;
    fetch(
      `https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/tags?per_page=3&page=1&lang=vi&post=${post.id}`
    )
      .then((res) => res.json())
      .then((result) => {
        dispatch(actGetTag(result));
      });
  }, [post]);

  return (
    <main className="post-detail">
      <div className="spacing" />
      <PostDetailHead />
      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent />
            <PostDetailSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default PostDetailPage;
