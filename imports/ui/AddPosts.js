import React from 'react';
import {Posts} from './../api/posts.js';

export default class AddPosts extends React.Component {
  processFormDataFunction(event){
    event.preventDefault();
    let postName = event.target.formInputNameAttribute.value;
    let link = event.target.formInputLinkAttribute.value;
    if (postName && link){
      event.target.formInputNameAttribute.value = '';
      event.target.formInputLinkAttribute.value = '';
      Posts.insert({
        name: postName,
        votes: 0,
        link: link
      });
    }
    else if (postName) {
      event.target.formInputNameAttribute.value = '';
      Posts.insert({
        name: postName,
        votes: 0,
      });
    }
  }

  render(){
    return (
      <div>
        <form onSubmit={this.processFormDataFunction.bind(this)}>
          <input type='text' name='formInputNameAttribute' placeholder='Post Title' />
          <input type='text' name='formInputLinkAttribute' placeholder='Link' />
          <button>Add Post</button>
        </form>
      </div>
    )
  }

};
