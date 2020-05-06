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


import React, { Component } from 'react'; 
import Post from './Post'; 

class PostList extends Component {
    state = { 
        query: "",
        filteredPosts: [...this.props.PostList],

    };

    handleChange = (e) => {
        const query = e.target.value;
        const newPosts = this.props.postList.filter(
        (post) =>
        post.title.toLowerCase().indexOf(query.toLowerCase()) >= 0 );

        this.setState({
            query: query,
            filteredPosts: newPosts,
        });
    };

     renderPosts = () => {
        const display = this.state.filteredPosts.map((post) => {
            return( <Post post={post} 
            key={post.id} 
            handleSelect = {this.props.handleSelect}/>
            );
        });
        return display; 
    };
    render() {
        return (
            <div>
                <div style={myStyles.searchBar}>
                    <p>
                        <span role="img"></span>
                        <input
                            style={myStyles.input}
                            type="text"
                            placeholder="Search Titles"
                            onChange={this.handleChange}
                            />
                    </p>
                </div>
                <div className="posts">
                {this.renderPosts()}
                    
                </div>
            </div>
        );
    }
};

const myStyles = {
    searchBar: {
        flex: 1,
        flexDirection: "row",
        marginLeft: "30%",
        marginRight: "30%",
        marginBottom: 16
    },

    input: {
        width: "70%",
        height: 32,
        fontSize: 20,
        marginBottom: 4
    },
};

export default PostList;