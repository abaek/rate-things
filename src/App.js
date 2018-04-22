import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListScreen from './components/ListScreen.js';
import HomeScreen from './components/HomeScreen.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/list/:user/:category" component={ListScreen} />
        </Switch>
      </Router>
    );
  }
}

export default App;
