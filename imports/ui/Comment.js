/*
THe Post.js Component is content that was moved from client/main.js. Its
main responsibility is to put together info about one post along with
adding, subtracting votes and removing the post. Props are passed in from
imports/ui/PostLists.js
*/

import React from 'react';
import {Posts} from './../api/posts.js';
import PropTypes from 'prop-types';

export default class Post extends React.Component {

  render() {
    return (
      // props were passed in from imports/ui/PostLists.js
        <div key={this.props.post._id} className='item'>
            {' '}<h1>{this.props.post.name}</h1><p>{this.props.post.votes} point[s]</p>
            <br/>
            <br/>
            {' '}<button onClick={() => Posts.update({_id: this.props.post._id}, {$inc: {votes: 1}})}>+1</button>
            {' '}<button onClick={() => Posts.update({_id: this.props.post._id}, {$inc: {votes: -1}})}>-1</button>
            <button onClick={() => Posts.remove({_id: this.props.post._id})}>Delete</button>
            
        </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
