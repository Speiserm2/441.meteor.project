import React from 'react';
import {Comments} from './../api/comments.js';

export default class AddComments extends React.Component {
  processFormDataFunction(event){
    event.preventDefault();
    let commentName = event.target.commentText.value;
    if (commentName){
      event.target.commentText.value = '';
      Comments.insert({
        name: commentName,
        votes: 0,
        post_id: this.props.passedPostId,
      });
    }
  }

  render(){
    return (
      <div>
        <form onSubmit={this.processFormDataFunction.bind(this)}>
          <input type='text' name='commentText' placeholder='Comment' />
          <button>Add Comment</button>
        </form>
      </div>
    )
  }

};
