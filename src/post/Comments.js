import React from 'react'

const Comments = ({ comments = [] }) => (
  <div>
    {comments.map((comment, index) => <p key={index}>{comment.message}</p>)}
  </div>
)

const fragment = `
  fragment Comment_comment on Comment {
    message
  }
`

export default Comments
export {
  fragment
}