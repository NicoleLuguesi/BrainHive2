import React, { Component } from 'react'; 
import Post from './Post'; 

class PostList extends Component {
    state = { 
        query: "",
        filteredPosts: [...this.props.posts],

    };

    handleChange = (e) => {
        const query = e.target.value;
        const newPosts = this.props.posts.filter(
        (post) =>
        post.title.toLowerCase().indexOf(query.toLowerCase()) >= 0 );

        this.setState({
            query: query,
            filteredPosts: newPosts,
        });
    };

     renderPosts = () => {
        const display = this.state.filteredPosts.map((post) => {
            return( <Post 
            
            post={post} 
            key={post.id} 
            handleSelect = {this.props.handleSelect}/>
            );
        });
        return display; 
    };
    render() {
        return (
            <div>
                <div 
                style={myStyles.searchBar}
                >
                    <p>
                        <span role="img">🔍</span>
                        <input
                            //style={myStyles.input}
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