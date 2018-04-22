import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'loading',
    };
  }

  static propTypes = {
    user: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

  componentDidMount() {
    fetch('http://rate-things-backend.herokuapp.com/data')
      .then(result => result.json())
      .then(data => {
        console.log(data);
        this.setState({ data: data.movies[0].description });
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        {data}
        <span className={css(styles.red)}>This is red.</span>
        <span className={css(styles.hover)}>This turns red on hover.</span>
        <span className={css(styles.small)}>
          This turns red when the browser is less than 600px width.
        </span>
        <span className={css(styles.red, styles.blue)}>This is blue.</span>
        <span className={css(styles.blue, styles.small)}>
          This is blue and turns red when the browser is less than 600px width.
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
