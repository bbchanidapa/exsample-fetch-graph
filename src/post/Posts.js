import React from 'react'
import Comments from './Comments'

const Posts = ({ posts = [] }) => (
  <div>
    <label>Posts</label>
    {
      posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <Comments comments={post.comments} />
        </div>
      ))
    }
  </div>
)

const fragment = `
  fragment Posts_post on Post {
    title
    comments {
      ...Comment_comment
    }
  }
`

export default Posts
export {
  fragment
}
