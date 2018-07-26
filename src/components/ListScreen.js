import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'loading',
      movies: [],
    };
  }

  static propTypes = {
    user: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.fetchMovies()
  }

  fetchSampleData() {
    fetch('http://0.0.0.0:5000/data')
      .then(result => result.json())
      .then(data => {
        console.log(data);
        this.setState({ data: data.movies[0].description });
      });
  }

  fetchMovies() {
    fetch('http://0.0.0.0:5000/movies')
      .then(result => result.json())
      .then(movies => {
        console.log(movies);
        this.setState({ movies: movies});
      });
  }

  render() {
    const { data, movies } = this.state;


    const moviesList = movies.map(movie => <div> {movie.title} : {movie.rating} </div>)

    return (
      <div>
        {data}
        <div>
        {moviesList}
        </div>
        <span className={css(styles.red)}>THIS is red.</span>
        <span className={css(styles.hover)}>This turns red on hover.</span>
        <span className={css(styles.small)}>
          This turns red when the browser is less than 600px width.
        </span>
        <span className={css(styles.red, styles.blue)}>This is blue.</span>
        <span className={css(styles.blue, styles.small)}>
          This is blue and turns red when the browser is less than 600px width.
          Hello.
        </span>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    backgroundColor: 'red',
  },

  blue: {
    backgroundColor: 'blue',
  },

  hover: {
    ':hover': {
      backgroundColor: 'red',
    },
  },

  small: {
    '@media (max-width: 600px)': {
      backgroundColor: 'red',
    },
  },
});

export default ListScreen;
