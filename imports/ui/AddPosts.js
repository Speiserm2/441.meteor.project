/*
THe sole purpose of AddPosts is to obtain entered data and add it to the db
*/

import React from 'react';
// the following import is needed b/c the processFormDataFunction needs access to the db
import {Posts} from './../api/posts.js';

export default class AddPosts extends React.Component {
  // this method will be called when someone submits the form (add post)
  processFormDataFunction(event){
    event.preventDefault(); // this stops the page from reloading
                      // notice the formInputNameAttribute comes from the input text box as it is the name attribute
    let postName = event.target.formInputNameAttribute.value;
    if (postName){ // check to make sure something was entered
      event.target.formInputNameAttribute.value = ''; // clear out the text box
      // insert new post
      Posts.insert({
        name: postName,
        votes: 0,
      });
    }
  }

  render(){
    return (
      <div>
                                {/*the bind(this) forces a binding  */}
        <form onSubmit={this.processFormDataFunction.bind(this)}>
          <input type='text' name='formInputNameAttribute' placeholder='Post Name' />
          <button>Add Post</button>
        </form>
      </div>
    )
  }

};
