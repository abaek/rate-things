import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  goToList = () => {
    this.props.history.push("/");
  };

  goToAdd = () => {
    this.props.history.push("/add");
  };

  render() {
    return (
      <div>
        <button onClick={() => this.goToList()}>List</button>
        <button onClick={() => this.goToAdd()}>Add</button>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  middle: {
    display: "flex",
    justifyContent: "center",
  },
});

export default withRouter(NavBar);
