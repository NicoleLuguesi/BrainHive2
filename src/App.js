import React, {Component } from 'react';
import './App.css';
import Post from './components/Post';
import posts from './mock/posts';
import postForm from './components/PostForm'
import PostForm from './components/PostForm';

class App extends Component {
  renderPosts = () => {
      const display = posts.map(post => {
        return <Post post={post} />;
      });
      return display;
    }

  render() {
    return (

      
      <div className="App">
        <div className="card">
        
        </div>
        <h1>Welcome to Brain Hive</h1>
        {/* <Post post={this.posts[0]}/> */}
        <div className="postList">
        {this.renderPosts()}
        <PostForm />
      </div>
      </div>
    );
   }
  }

export default App;
