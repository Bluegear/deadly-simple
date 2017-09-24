import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">Home</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
