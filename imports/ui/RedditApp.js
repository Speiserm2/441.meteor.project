/*
The purpose of the RedditApp component is to serve as the parent app Component
and compile the other components
*/
import React from 'react';
import PropTypes from 'prop-types';
// the following imports were moved from client/main.js
import TitleBar from './TitleBar.js';
import AddPosts from './AddPosts.js';
import PostList from './PostList.js';

// the RedditApp is going to be doing what was previously done in client/main.js
// it needs to be exported so that it is available to other project resources
export default class RedditApp extends React.Component {
  render(){ // render is used to return jsx markup
   return (
     <div>
        {/*in client/main.js <RedditApp... props were passed. Here they are collected and passed to the TitleBar component*/}
        <TitleBar title={this.props.passedPropTitle} author={this.props.passedPropAuthor}/>
        <div className="wrapper">
          {/*AddPosts component is placed in this location - no props passed*/}
          <AddPosts />
          {/*PostList Component is passed the posts prop which was passed from <RedditApp...client/main.js*/}
          <PostList  posts={this.props.passedPropPosts}/>
        </div>
     </div>
    );
  }
};

RedditApp.propTypes = {
  // this is going to throw an error in the browser console but the program will still work.
  // basically, want to require that the correct prop-type was passed
  passedPropTitle: PropTypes.string.isRequired,
  passedPropPosts: PropTypes.array.isRequired,
};
