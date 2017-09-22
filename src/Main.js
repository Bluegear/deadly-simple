import React, { Component } from 'react';
import Home from './Home';
import FirstPost from './posts/FirstPost';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/posts/first-post' component={FirstPost}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
