import { useSelector } from "react-redux";
import "./post-detail.css";
import PostDetailComments from "./PostDetailComments";
import PostDetailRichText from "./PostDetailRichText";
import PostDetailTags from "./PostDetailTags";
import { formattedDate } from "../../helpers/myDayjs";

function PostDetailContent() {
  const slugPost = useSelector((state) => state.POST.slugPost);
  if (!slugPost) return <></>;

  const image = slugPost.featured_media_url;
  const content = slugPost.content.rendered;
  const tags = slugPost.tags;
  const avatar = slugPost.author_data.avatar;
  const excerpt = slugPost.excerpt.rendered;
  const modifiedTime = formattedDate(slugPost.modified);
  const commentCount = slugPost.comment_count;
  const commentName = slugPost.author_data.nickname;

  return (
    <div className="post-detail__content">
      <div className="thumbnail">
        <img src={image} alt="blog-title" />
      </div>

      <div className="content-padding">
        <PostDetailRichText content={content} />
        <PostDetailTags tags={tags} />
        <PostDetailComments
          avatar={avatar}
          commentCount={commentCount}
          excerpt={excerpt}
          modifiedTime={modifiedTime}
          commentName={commentName}
        />
      </div>
    </div>
  );
}

export default PostDetailContent;
