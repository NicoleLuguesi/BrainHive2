import React from 'react';

const Post = ({post}) => {

    return (
        <div className="box">{post.posterName}
        <h1>{post.title}</h1>
        <p>{post.summary}</p>
        </div>
    )
}
export default Post;