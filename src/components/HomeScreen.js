import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class HomeScreen extends Component {
  render() {
    return <Redirect to="/list/andy/movies" />;
  }
}

export default HomeScreen;
