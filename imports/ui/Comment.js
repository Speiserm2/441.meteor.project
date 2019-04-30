import React from 'react';
import {Comments} from './../api/comments.js';
import PropTypes from 'prop-types';

export default class Comment extends React.Component {

  render() {
    return (
        <div key={this.props.comment._id} className='item'>
            {' '}<h3>{this.props.comment.name}</h3><p>{this.props.comment.votes} point[s]</p>
            <br/>
            <br/>
            {' '}<button onClick={() => Comments.update({_id: this.props.comment._id}, {$inc: {votes: 1}})}>+1</button>
            {' '}<button onClick={() => Comments.update({_id: this.props.comment._id}, {$inc: {votes: -1}})}>-1</button>
            <button onClick={() => Comments.remove({_id: this.props.comment._id})}>Delete</button>
        </div>
    )
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};
