// import React from 'react';
// import Post from "./Post";

// /*
// Post List is in charge of displaying a list of post cards and passing along the select function.
// it has no state because...
// */

// const PostList = (props) => {
//     const renderPosts = () => {
//         // const mapFunction = (post) => {
//             //return <Post post={post} />;
//             // };

//             const display = props.posts.map((post) => {
//                 return 
//                     <Post post={post} key={post.id} handleSelect={props.handleSelect} />;
//             });
//             // [<Post post=[0] />, <Post post[1]/>, <Post post[2]/>]
//             return display;
//         };
//         return <div className="postList">{renderPosts()}</div>
//     };

//     export default PostList;


import React from 'react'; 
import Post from './Post'; 

const PostList = (props) => {
    const renderPosts = () => {
        const display = props.posts.map((post) => {
            return <Post post={post} 
            key={post.id} 
            handleSelect = {props.handleSelect}/>
        })
        return display; 
    };
    return (
        <div className="postList">{renderPosts()}</div>
    );
};

export default PostList;