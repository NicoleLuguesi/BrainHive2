  
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Post extends Component {
  state = {
      clicked: false
  };

  handleClick = () => {
    //this.props.handleSelect(this.props.post.id);
    this.setState({clicked: true})
};

  render() {
    const { post } = this.props;
  
  return (
            <div
                className='card' onClick={() => this.handleClick()}>
                {this.state.clicked ? <Redirect to ={`/post/${post.id}`} /> : null }
                <h2>{post.title}</h2>
                <p>{post.resourceAuthor}</p>
                <p>{post.summary}</p>
                {post.videoLength ? <p>Length: {post.videoLength}</p> : null}
                <p>Comments: {post.comments.length}</p>
                </div>
    )
  }
}

export default Post;