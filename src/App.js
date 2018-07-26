import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import ListScreen from './components/ListScreen.js';
import HomeScreen from './components/HomeScreen.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/list/:user/:category" component={ListScreen} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
