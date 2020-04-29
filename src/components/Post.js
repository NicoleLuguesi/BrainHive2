  
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Post extends Component {
  state = {
      clicked: false
  };

  handleClick = () => {
    this.props.handleSelect(this.props.post.id);
    this.setState({clicked: true})
};

  render() {
    const { post } = this.props;
  
  return (
            <div
                className={'box'} onClick={this.handleClick}
                onClick={() => this.handleClick()}>
                {this.state.clicked ? <Redirect to="/post/id"/> : null}
                <div className="card">
                <div className={'postTitle'}>
                    <h2>{post.title}</h2>
                </div>
                <b>{post.resourceAuthor}</b>
                <p>Poster: {post.posterName}</p>
                {post.videoLength ? (<p>Length: {post.videolength}</p>)
                    : null
                }
                <i>"{post.summary}"</i>
                <p>Comments: {post.comments.length}</p>
            </div>
            </div>
    )
  }
}

export default Post;