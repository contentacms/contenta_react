import React from 'react';
import PropTypes from 'prop-types';

import {
  Link
} from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite';
import Colours from '../../00_base/Colours/Colours';

const Default = (props) => (
  <div className={css(styles.container)}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/recipes">Recipe Landing</Link></li>
    </ul>
    <div>
      {props.children}
    </div>
  </div>
);

const styles = StyleSheet.create({
  container: {
    background: Colours.white,
  },
});

Default.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Default;
