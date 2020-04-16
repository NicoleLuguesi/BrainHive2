  
import React from 'react';

const Post = ({post}) => {

  // the paramater is doing this:
  // const {post} = props;

  return (
    <div className={'box'}>
    

      <h2 id="title">{post.title}</h2>
      <p id="author">{post.resourceAuthor}</p>
      {post.videoLength ? (<p id="length">Length: {post.videoLength}</p>) : null }
      {/* {conditional ? true code : false code} */}
      <p id="rating">Rating: {post.rating}</p>
      <p id="comments">Comments: {post.comments.length}</p>
    </div>
  )
}

export default Post;