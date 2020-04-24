import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import PostList from "./components/PostList";
import Navbar from "./components/Navbar";
//import Post from "./components/Post";
import posts from "./mock/posts";
import PostForm from "./components/PostForm";

class App extends Component {
  state = {
    posts: [...posts],
  };

  addPost = (postData) => {
    console.log("hello", postData);
    this.setState({
      posts: [...this.state.posts, postData],
    });
  };

  // renderPosts = () => {
  //   // const mapFunction = (post) => {
  //   //   return <Post post={post} />;
  //   // };

  //   const display = this.state.posts.map((post) => {
  //     return <Post post={post} />;
  //   });
  //   // [<Post post=[0]/>, <Post post[1]/>, <Post post[2]/>]
  //   return display;
  // };

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <PostList posts={this.state.posts} />
          </Route>
          <Route path="/add exact">
            <PostForm addPost={this.addPost} />
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;