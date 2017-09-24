import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Header from './Header';

require("font-awesome/css/font-awesome.min.css");
require("bulma/css/bulma.css");

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <section className="section">
            <Main />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
