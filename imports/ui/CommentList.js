import React from 'react';
import Comment from './Comment.js';
import PropTypes from 'prop-types';
import {Comments} from './../../imports/api/comments.js';

export default class CommentList extends React.Component {

  renderComments() {
    let dbComments = Comments.find({post_id: this.props.passedPostId},
      {sort: {votes: -1}} // key value pairs -1 is descending
    ).fetch();
    if (dbComments.length === 0){
      return (
        <div className='item'>
          <p>There are no comments, you should contribute!</p>
        </div>
      );
    } else {
      return dbComments.map((comment) => {
        return <Comment key={comment._id} comment={comment}/>;
      });
    }
  }
  render(){
    return (
      <div>
        {this.renderComments()}
      </div>
    );
  }
};
CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};
