import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="navbar is-transparent" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">Crypto66</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
