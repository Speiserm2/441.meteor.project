/*
This whole file has been cleaned up and represents a component based RedditApp
Notice there are three things going on after the imports
1. A sorted collection of posts is put into a dbCandidates object
2. The title of page is created - this is a component reusability thing
3. The parent RedditApp component (rendered and placed in dom) has three props passed to it
*/

import React from 'react';  // specify module then library name
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Posts} from './../imports/api/posts.js';
import {Tracker} from 'meteor/tracker';
// the following has been moved to the RedditApp component b/c it is in charge of putting these things together
// import TitleBar from './../imports/ui/TitleBar.js';
// import AddPosts from './../imports/ui/AddPosts.js';
// import PostList from './../imports/ui/PostList.js';
import RedditApp from './../imports/ui/RedditApp.js';
Meteor.startup(() => {
  Tracker.autorun(() => {
    let dbPosts = Posts.find({/*this empty gets all posts*/},
      {sort: {votes: -1}} // key value pairs -1 is descending
    ).fetch();

    let title = '(Not) reddit';
    ReactDOM.render(<RedditApp passedPropTitle={title} passedPropAuthor={'Mike Speiser'} passedPropPosts={dbPosts}/>, document.getElementById('content'));
  });

});
