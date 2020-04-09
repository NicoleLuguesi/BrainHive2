import React, { Component } from 'react';
import './App.css';
import Post from './component/Post'

class App extends Component {
  
    post = {
      posterName: 'Nicole',
      resourceAuthor: 'Steve Jobs',
      skillLevel: 'Advanced',
      cohort: '0',
      title: 'Get Smart with Technology',
      technology: 'JavaScript',
      summary: 'This is a very insightful article that I highly recommend',
      link: 'www.google.com/SteveJobs',
      resourceType: 'Article',
      datePublished: '1985-12-04.00:00z',
      length: '5',
      rating: '4',
      comments: 'Great resource',

  }
  render(){
  return (
    <div className="App">
      <h1>Brainhive 2</h1>
      <Post post={this.post}/>
    </div>
  );
}
}
export default App;
