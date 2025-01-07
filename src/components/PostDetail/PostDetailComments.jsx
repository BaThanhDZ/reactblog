import './comments.css'

function PostDetailComments({commentCount, avatar, excerpt, modifiedTime, commentName}) {
  let newExcerpt = excerpt.replace("<p>", "");
  newExcerpt = newExcerpt.replace("</p>", "");

  const array_excerpt = newExcerpt.split(" ");
  const cutExcerpt = array_excerpt.slice(0, 16);
  let updateExcerpt = cutExcerpt.join(" ");

  let replayComment = (
    <li className="item">
      <div className="comments__section">
        <div className="comments__section--avatar">
          <a href="/">
            <img src={avatar} alt="" />
          </a>
        </div>
        <div className="comments__section--content">
          <a href="/" className="comments__section--user">{commentName}</a>
          <p className="comments__section--time">{modifiedTime}</p>
          <p className="comments__section--text">{updateExcerpt}</p>
          {/* <i class="ion-reply comments__section--reply"></i> */}
        </div>
      </div>
    </li>
  );

  return (
    <div className="post-detail__comments">
      <div className="comments__form">
        <div className="comments__form--control">
          <div className="comments__section--avatar">
            <a href="/">
              <img src={avatar} alt="" />
            </a>
          </div>
          <textarea />
        </div>
        <div className="text-right">
          <button className="btn btn-default">Submit</button>
        </div>
      </div>
      <p>{commentCount} Comments</p>
      <ul className="comments">
        {/* Comment 1 */}
        <li className="item">
          <div className="comments__section">
            <div className="comments__section--avatar">
              <a href="/">
                <img src={avatar} alt="" />
              </a>
            </div>
            <div className="comments__section--content">
              <a href="/" className="comments__section--user">{commentName}</a>
              <p className="comments__section--time">{modifiedTime}</p>
              <p className="comments__section--text">{newExcerpt}</p>
              {/* <i class="ion-reply comments__section--reply"></i> */}
            </div>
          </div>
          {/* Reply Comments */}
          <ul className="comments">
            {replayComment}
            {replayComment}
          </ul>
          {/* Reply form */}
          <div className="comments__form">
            <div className="comments__form--control">
              <div className="comments__section--avatar">
                <a href="/">
                  <img src={avatar} alt="" />
                </a>
              </div>
              <textarea />
            </div>
            <div className="text-right">
              <button className="btn btn-default">Submit</button>
            </div>
          </div>
        </li>
        {/* Comment 2 */}
        <li className="item">
        <div className="comments__section">
            <div className="comments__section--avatar">
              <a href="/">
                <img src={avatar} alt="" />
              </a>
            </div>
            <div className="comments__section--content">
              <a href="/" className="comments__section--user">{commentName}</a>
              <p className="comments__section--time">{modifiedTime}</p>
              <p className="comments__section--text">{newExcerpt}</p>
              {/* <i class="ion-reply comments__section--reply"></i> */}
            </div>
          </div>
          <div className="comments__hidden">
            <a href="/"><i className="icons ion-ios-undo" /> Xem thêm 2 câu trả lời</a>
          </div>
        </li>
        {/* Comment 3 */}
        <li className="item">
        <div className="comments__section">
            <div className="comments__section--avatar">
              <a href="/">
                <img src={avatar} alt="" />
              </a>
            </div>
            <div className="comments__section--content">
              <a href="/" className="comments__section--user">{commentName}</a>
              <p className="comments__section--time">{modifiedTime}</p>
              <p className="comments__section--text">{updateExcerpt}</p>
              {/* <i class="ion-reply comments__section--reply"></i> */}
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default PostDetailComments