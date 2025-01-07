import { useParams } from "react-router-dom"

import PostDetailContent from "../components/PostDetail/PostDetailContent"
import PostDetailHead from "../components/PostDetail/PostDetailHead"
import PostDetailSidebar from "../components/PostDetail/PostDetailSidebar"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { actGetSlug, actPostRelated } from "../store/post/actions"

function PostDetailPage() {
  const params = useParams()
  const dispatch = useDispatch();
  
  // lay slug

  // useEffect call api lay bai viet thong qua slug -> slug
  // /wp/v2/posts?slug=cung-nhau-tim-hieu-khai-niem-reactjs-la-gi

  useEffect(() => {
    fetch
    (`https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/posts?slug=${params.slug}`)
      .then((res) => res.json()).then((result) => {        
        dispatch(actGetSlug(result))
      })
  }, [params.slug]);

  // const title = slugPost.title.rendered;
  // const author = slugPost.author_data.nickname;
  // const date = slugPost.date;
  // const viewCount = slugPost.view_count;
  // const commentCount = slugPost.comment_count;
  // const image = slugPost.featured_media_url;
  // const content = slugPost.content.rendered;
  // const tags = slugPost.tags;
  // const avatar = slugPost.author_data.avatar;
  // const excerpt = slugPost.excerpt.rendered;
  // const modifiedTime = slugPost.modified;
  // const link = slugPost.link
  
  
  
  useEffect(() => {
    fetch(`https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/posts?per_page=3&page=1&author=1&lang=vi&exclude=18`)
    .then((res) => res.json()).then((result) => {
      console.log(result)
      dispatch(actPostRelated(result))
    })
  }, [])

  // useEffect lay bai viet lien quan -> postDetail
  // call api: /wp/v2/posts?per_page=3&page=1&lang=vi&author=1&exclude=18
  return (
    <main className="post-detail">
      <div className="spacing" />
      
      <PostDetailHead/>
      
      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent/>

            <PostDetailSidebar />
          </div>
        </div>
      </div>
    </main>

  )
}

export default PostDetailPage