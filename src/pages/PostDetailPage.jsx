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
import { fetchDetailPost, fetchRelatedPosts } from "../store/postSlice";
import { fetchTags } from "../store/tagsSlice";

function PostDetailPage() {
  const params = useParams();
  const dispatch = useDispatch();
  // const [post, setPost] = useState(null);
  const post = useSelector((state) => state.POST.slugPost);

  //call api lay bai viet thong qua slug
  useEffect(() => {
    dispatch(fetchDetailPost(params.slug));
  }, [params.slug]);

  // call API lấy bài viết cùng danh mục thông qua tác giả và id
  useEffect(() => {
    if (!post) return;
    const params = { author: post.author, id: post.id };
    dispatch(fetchRelatedPosts(params));
  }, [post]);

  // call API lấy TAG thông qua id bài viết
  useEffect(() => {
    if (!post) return;
    // fetch(
    //   `https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/tags?per_page=3&page=1&lang=vi&post=${post.id}`
    // )
    //   .then((res) => res.json())
    //   .then((result) => {
    //     dispatch(actGetTag(result));
    //   });

    dispatch(fetchTags(post.id))
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
