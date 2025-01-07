import { useSelector } from "react-redux";
import PostDetailAuthor from "./PostDetailAuthor"
import PostDetailRelatedPosts from "./PostDetailRelatedPosts"

function PostDetailSidebar() {
  const slugPost = useSelector((state) => state.POST.slugPost)
  if(slugPost.length === 0 ) return <></>;
  
  const author = slugPost.author_data.nickname;
  const avatar = slugPost.author_data.avatar;
  const desc = slugPost.excerpt.rendered;
  
  return (
    <div className="post-detail__side">
      <PostDetailAuthor
        author={author}
        avatar={avatar}
        desc={desc}
      />
      <div className="spacing" />
      <PostDetailRelatedPosts />
    </div>
  )
}

export default PostDetailSidebar