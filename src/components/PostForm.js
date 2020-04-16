import React from 'react';

const PostForm = (props) => {
    return (
        <div>
            <form>
            {/* <label htmlFor="PosterName">Your Name:</label> */}
                <input type="text" id="posterName" placeholder="Your Name"></input>
            </form>
        </div>
    )
}

export default PostForm