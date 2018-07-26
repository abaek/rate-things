import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import ReactTable from "react-table";
import "react-table/react-table.css";

const columns = [
  {
    Header: "Movie",
    accessor: "title",
  },
  {
    Header: "Rating",
    accessor: "rating",
  },
];

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  static propTypes = {
    user: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    fetch("http://0.0.0.0:5000/movies")
      .then(result => result.json())
      .then(movies => {
        console.log(movies);
        this.setState({ movies: movies });
      });
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <ReactTable data={movies} columns={columns} />
        <span className={css(styles.red)}>THIS is red.</span>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    backgroundColor: "red",
  },
});

export default ListScreen;
