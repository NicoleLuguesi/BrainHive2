import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import PostList from "./components/PostList";
import Navbar from "./components/Navbar";
//import Post from "./components/Post";
import posts from "./mock/posts";
import PostForm from "./components/PostForm";
import ViewPost from './components/ViewPost'

class App extends Component {
  state = {
    posts: [...posts],
  };

  addPost = (postData) => {
    //console.log("hello", postData);
    postData.id = this.state.posts.length + 1;
    this.setState({
      posts: [...this.state.posts, postData],
    });
  };

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <PostList 
            posts={this.state.posts}
            handleSelect={this.handleSelect} />
          </Route>
          <Route path="/add exact">
            <PostForm addPost={this.addPost} />
          </Route>
          <Route path="/post/:postId">
          <ViewPost
          post={this.state.posts[this.state.selected - 1]} />
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;