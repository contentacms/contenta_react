import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import breakpoints from '../../../styles/breakpoints';
import grid from '../../../styles/grid';

const PageFooter = () => (
  <footer>
    <div className={css(styles.footerTop)}>
      <h2 className={css(styles.h2)}>Umami Magazine</h2>
      <div className={css(styles.col, styles.leftCol)}>
        Umami Publications example footer content. Integer posuere erat a ante veneatis dapibus
        posuere velit aliquet. Sed posuere consectetur est at lobortis. Donec id elit non mi porta.
      </div>
      <div className={css(styles.col, styles.rightCol)}>
        <ul className={css(styles.ul)}>
          <li>Get in touch</li>
          <li><Link to={'https://www.drupal.org/node/2818741#comment-12114776'}>About the Drupal Umami theme</Link></li>
        </ul>
      </div>
    </div>
    <div className={css(styles.footerBottom)}>
      <div className={css(styles.col, styles.leftCol)}>
        <strong>Umami Magazine & Umami Publications</strong> are purely fictional companies used for illustrative
        purposes only.
      </div>
      <div className={css(styles.col, styles.rightCol)}>
        &copy; Terms & Conditions
      </div>
    </div>
  </footer>
);

const styles = StyleSheet.create({
  footerTop: {
    backgroundColor: 'DarkGray',
    padding: '0 0 1rem 0',
    [breakpoints.echoAndUp]: {
      ...grid.span(12),
    },
  },
  footerBottom: {
    backgroundColor: 'LightGray',
    padding: '1rem 0 1rem 0',
    [breakpoints.echoAndUp]: {
      ...grid.span(12),
    },
  },
  h2: {
    fontSize: '2rem',
    marginBottom: 0,
  },
  col: {
    padding: '0 0 1rem 0',
    [breakpoints.echoAndUp]: {
      ...grid.span(3),
      padding: '0 0 2rem 0',
    },
  },
  leftCol: {
    [breakpoints.echoAndUp]: {
      ...grid.span(9),
    },
  },
  rightCol: {
    [breakpoints.echoAndUp]: {
      padding: 0,
    },
  },
  ul: {
    padding: 0,
    listStyleType: 'none',
    margin: 0,
  },
});

export default PageFooter;
