import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import Button from '../../01_atom/Button/Button';
import grid from '../../../styles/grid';
import breakpoint from '../../../styles/breakpoints';

const TeaserFeatured = (props) => (
  <div className={css(styles.context)}>
    <div className={css(styles.span, props.textAlignment === 'right' ? styles.right : null)}>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      {props.cta &&
        <Button><Link to={props.cta.path}>{props.cta.title}</Link></Button>
      }
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
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  cta: PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string.isRequired,
  }),
};

export default TeaserFeatured;
