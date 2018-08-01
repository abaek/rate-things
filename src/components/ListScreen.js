import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import ReactTable from "react-table";
import "react-table/react-table.css";
import queryString from "query-string";
import NavBar from "./NavBar.js";

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
      isDesc: true,
    };
  }

  static propTypes = {
    user: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    if ("desc" in values && values.desc === "false") {
      this.setState({ isDesc: false });
    }
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
    const { movies, isDesc } = this.state;

    return (
      <div>
        <NavBar />
        <ReactTable
          data={movies}
          columns={columns}
          defaultSorted={[
            {
              id: "rating",
              desc: isDesc,
            },
          ]}
        />
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
