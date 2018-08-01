import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import ReactStars from "react-stars";
import NavBar from "./NavBar.js";

class AddMovieScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      rating: -1,
      showError: false,
    };
  }

  addMovie = () => {
    const { title, rating } = this.state;
    console.log(title);
    console.log(rating);
    if (title === "" || rating === -1) {
      this.setState({ showError: true });
    } else {
      const data = { title: title, rating: rating };
      fetch("http://0.0.0.0:5000/add_movie", {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
      });
      this.setState({ showError: false, title: "", rating: -1 });
    }
  };

  titleChanged = e => {
    console.log(e.target.value);
    this.setState({ title: e.target.value });
  };

  ratingChanged = newRating => {
    this.setState({ rating: newRating });
  };

  render() {
    const { title, rating } = this.state;

    return (
      <div>
      <NavBar/>
        <div>Add Movie:</div>
        <input value={title} onChange={this.titleChanged} />
        <div className={css(styles.middle)}>
          <ReactStars
            count={10}
            onChange={this.ratingChanged}
            size={24}
            half={false}
            color2={"#ffd700"}
            value={rating}
          />
        </div>
        <button onClick={() => this.addMovie()}>Add</button>
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

export default AddMovieScreen;
