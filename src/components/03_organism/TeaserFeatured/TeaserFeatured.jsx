import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Button from '../../01_atom/Button/Button';
import grid from '../../../styles/grid';
import breakpoint from '../../../styles/breakpoints';

const TeaserFeatured = (props) => (
  <div className={css(styles.context)}>
    <div className={css(styles.span, props.textAlignment === 'right' ? styles.right : null)}>
      <h3>Home baked hot cross buns</h3>
      <p>Yuccie hell of blog, air plant organic williamsburg banjo crucifix whatever YOLO. Asymmetrical austin pork belly salvia.</p>
      <Button>more</Button>
    </div>
  </div>
);

const styles = StyleSheet.create({
  context: {
    ...grid.context
  },
  span: {
    display: 'block',
    padding: '1rem',
    [breakpoint.echoAndUp]: {
      ...grid.span(6),
    }
  },
  right: {
    float: 'right',
  }
});

TeaserFeatured.defaultProps = {
  textAlignment: 'left',
};

TeaserFeatured.propTypes = {
  textAlignment: PropTypes.string,
};

export default TeaserFeatured;
