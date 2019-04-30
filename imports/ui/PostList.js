import React from 'react';
import Post from './Post.js';
import PropTypes from 'prop-types';

export default class PostList extends React.Component {

  renderPosts() {
    if (this.props.posts.length === 0){
      return (
        <div className='item'>
          <p>There are no posts, you should contribute!</p>
        </div>
      );
    } else {
      return this.props.posts.map((post) => {
        return <Post key={post._id} post={post}/>;
      });
    }
  }
  render(){
    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
};
PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};
