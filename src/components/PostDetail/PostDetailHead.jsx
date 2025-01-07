import { useSelector } from "react-redux"

function PostDetailHead() {
  
  const slugPost = useSelector((state) => state.POST.slugPost)
  if(slugPost.length === 0 ) return <></>;

  const title = slugPost.title.rendered;
  const author = slugPost.author_data.nickname;
  const date = slugPost.date;
  const viewCount = slugPost.view_count;
  const commentCount = slugPost.comment_count;
  
  return (
    <div className="post-detail__head">
      <div className="tcl-container">
        <h1 className="post-detail__title">{title}</h1>
        <ul className="post-detail__info">
          <li className="item author">
            By <a href="/"><strong>{author}</strong></a>
          </li>
          <li className="item date">
            {date}
          </li>
          <li className="item views">
            {viewCount} <i className="icons ion-ios-eye" />
          </li>
          <li className="item comments">
            {commentCount} <i className="icons ion-ios-chatbubble" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PostDetailHead