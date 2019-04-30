import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderAuthor(){
    if (this.props.author){
      return <p>author: {this.props.author}</p>
    }
  }
  render(){
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderAuthor()}
        </div>
      </div>
    )
  }
};

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

TitleBar.defaultProps= {
  title: 'Default title',
};
