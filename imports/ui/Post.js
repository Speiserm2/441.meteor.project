import React from 'react';
import {Posts} from './../api/posts.js';
import PropTypes from 'prop-types';
import CommentList from './CommentList.js';
import AddComments from './AddComments.js';

export default class Post extends React.Component {

  render() {
    return (
        <div key={this.props.post._id} className='item'>
            {' '}<a href={this.props.post.link}><h1>{this.props.post.name}</h1></a><p>{this.props.post.votes} point[s]</p>
            <br/>
            <br/>
            {' '}<button onClick={() => Posts.update({_id: this.props.post._id}, {$inc: {votes: 1}})}>+1</button>
            {' '}<button onClick={() => Posts.update({_id: this.props.post._id}, {$inc: {votes: -1}})}>-1</button>
            <button onClick={() => Posts.remove({_id: this.props.post._id})}>Delete</button>
            <CommentList passedPostId={this.props.post._id}/>
            <AddComments passedPostId={this.props.post._id}/>
        </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
