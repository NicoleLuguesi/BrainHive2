import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from './common/Button';

class ViewPost extends Component {
    state = {
      showComments: false,
    };

    clickHandler = () => {
      this.setState({
        showComments: !this.state.showComments,
      });
    };
    
    renderComments = (post) => {
      return post.comments.map((comment) => {
        return (
          <div className="box">
            <p>{comment.commenter}</p>
            <p>{comment.text}</p>
          </div>
        );
      });
    };

    render() {
        const { postId } = this.props.match.params;
        console.log("postId", {postId})
        const post = this.props.post;

        console.log(post)

    return(
        <div className={myStyles.container}>
        
        <h1>{post.title}</h1>
        
        <h2>{post.resourceAuthor}</h2>
        <h4>Submitted by: {post.posterName}, Cohort: {post.cohort}</h4>
        <h4>Rating: {post.rating}</h4>
        <i>"{post.summary}"</i>
        <p>Time to complete: {post.timeToComplete} minutes</p>
        <a href={post.link}>Click to view article.</a>

        <div>
              <Button onClick={this.clickHandler}>
                {this.state.showComments ? "Hide Comments" : "Show Comments"}
              </Button>
              {this.state.showComments ? this.renderComments(post) : null}
            </div>

        </div>
      )
    };
};

const myStyles = {
  row: {
    width: "100%",
    marginRight: "8%",
    marginLeft: "8%",
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    marginBottom: "10px",
    selfAlign: "center",
    justifyContent: "space-evenly",
  },
  cell: {
    // flex: 1
  },
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100vh",
    width: "80%",
    justifyContent: "flex-start",
    alignItems: "center",
    border: "1px solid blue",
    boxShadow: "5px 3px 5px blue",
    marginTop: 16,
    marginBottom: 16,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 16,
    paddingBottom: 16,
  },
  button: {
    marginTop: 16,
    backgroundColor: "blue",
    color: "white",
  },
};

export default withRouter(ViewPost); 