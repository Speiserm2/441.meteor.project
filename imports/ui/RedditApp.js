import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar.js';
import AddPosts from './AddPosts.js';
import PostList from './PostList.js';

export default class RedditApp extends React.Component {
  render(){
   return (
     <div>
        <TitleBar title={this.props.passedPropTitle} author={this.props.passedPropAuthor}/>
        <div className="wrapper">
          <AddPosts />
          <PostList  posts={this.props.passedPropPosts}/>
        </div>
     </div>
    );
  }
};

RedditApp.propTypes = {
  passedPropTitle: PropTypes.string.isRequired,
  passedPropPosts: PropTypes.array.isRequired,
};
