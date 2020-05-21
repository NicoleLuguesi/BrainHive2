import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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
            <div classname = 'card' key= {Math.random()}>
          <p>{comment.commenter}</p>
          <p>{comment.text}</p>
        </div>
        );
      });
    };

     renderStars = (post) => {
        const rating = post.rating;
        let stars = "";
        for (let i = 0; i < rating; i++){
            stars += "★ ";   
        }
        return stars;
    };

    render() {
        let { postId } = this.props.match.params;
        postId = parseInt(postId);

        const post = this.props.posts.list.filter(item => {return item.id === postId})[0];
        let postLink = post.link;

        return(
          <div style={myStyles.container}>
          <h3 >{post.title}</h3>
                        
            <h5>{post.summary}</h5>
            <h5> Rating: {post.rating}</h5>
            <a  href = {postLink}>
              <h5> View the : {post.resourceType}</h5>
            </a>
            
            <Button onClick = {this.clickHandler}>
              {this.state.showComments ? "Hide Comments": "Show Comments"}
            </Button> 
            {this.state.showComments ? this.renderComments(post) : null}
          
          </div>
      )
    }
  }

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
  
      
  const mapStateToProps = (store) => {
    return{
      posts:store.posts
    };
  };
  
  export default connect(mapStateToProps)(withRouter(ViewPost));