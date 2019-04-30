/*
Just like how RedditApp is responsible for putting together all the components
the AddPosts Component is responsible for putting together the individual
Post components
*/
import React from 'react';
import Post from './Post.js';
import PropTypes from 'prop-types';

export default class PostList extends React.Component {

  renderPosts() {
    {/* simple conditional to check if there are any entries in the posts object */}
    if (this.props.posts.length === 0){
      return (
        <div className='item'>
          <p>There are no posts, you should contribute!</p>
        </div>
      );
    } else {
      {/* this was originally in client/main.js - it is the meat and potatoes of putting together the list of posts */}
      return this.props.posts.map((post) => {
        /* Important - the following passes a key and post object to the Post Component */
        return <Post key={post._id} post={post}/>;
      });
    }
  }
/* A simple and clean means of wrapping the posts in a root div container with this.renderPosts() */
  render(){
    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
};
// make sure the posts object is an array
PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};
