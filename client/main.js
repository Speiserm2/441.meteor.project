import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Posts} from './../imports/api/posts.js';
import {Comments} from './../imports/api/comments.js';
import {Tracker} from 'meteor/tracker';
import RedditApp from './../imports/ui/RedditApp.js';
Meteor.startup(() => {
  Tracker.autorun(() => {
    let dbPosts = Posts.find({},
      {sort: {votes: -1}}
    ).fetch();

    let title = '(Not) reddit';
    ReactDOM.render(<RedditApp passedPropTitle={title} passedPropAuthor={'Mike Speiser'} passedPropPosts={dbPosts}/>, document.getElementById('content'));
  });

});
