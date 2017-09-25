import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div className="List">
        <ul>
          <li><a href="/posts/what-is-ico">ICO คืออะไร?</a></li>
          <li><a href="/posts/firstpost">First post</a></li>
        </ul>
      </div>
    );
  }
}

export default List;
