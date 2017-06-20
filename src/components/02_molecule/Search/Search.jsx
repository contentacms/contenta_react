import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Search = () => (
  <form>
    <div class="input-field">
      <input id="search" type="search" required />
        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
        <i class="material-icons">close</i>
    </div>
  </form>
);

const styles = StyleSheet.create({
  form: {
    height: '100%',
  },
  inputField: {
    height: '100%',
    fontSize: '1.2rem',
    border: 'none',
    paddingLeft: '2rem',
    ':focus': {
      border: 'none',
      boxShadow: 'none',
    },
  },
  label: {
    top: 0,
    left: 0,
  },
  i: {
    color: 'rgba(255, 255, 255, 0.7)',
    transition: 'color .3s',
  },
});

export default Search;
