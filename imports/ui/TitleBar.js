/*
The purpose of the TitleBar component is to create the title bar based on
content passed as a prop from client/main.js to imports/ui/RedditApp to TitleBar
*/

import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderAuthor(){ // this is more practice with methods - the purpose is to check if an author is provided
    if (this.props.author){ // prop author was set in redditApp - author={this.props.passedPropAuthor
      return <p>author: {this.props.author}</p>
    }
  }
  render(){
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {/*<p>author: {this.props.author}</p>   if no author is provided there may be a problem. So the next line checks for an author*/}
          {this.renderAuthor()} {/* if no author will implicitly return undefined which wont render*/}
        </div>
      </div>
    )
  }
};

TitleBar.propTypes = {// this equals an object
  title: PropTypes.string.isRequired, //throws warnings in browser when undefined or not string
  //useful if you didn't create the component and if you are tying to use it incorrectly - do something with an array instead of a string
  author: PropTypes.string.isRequired
};

TitleBar.defaultProps= {
  title: 'Default title', //this removes the warning if no title is provided
};
