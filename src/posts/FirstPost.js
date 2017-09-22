import React, { Component } from 'react';
var MarkdownFile = require('react-markdown-file');

class FirstPost extends Component {
  render() {
    return (
        <div className="FirstPost post content">
            <MarkdownFile fileName='firstpost.md'/>        
        </div>
    );
  }
}

export default FirstPost;
