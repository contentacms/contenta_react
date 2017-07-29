import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import breakpoints from '../../../styles/breakpoints';
import grid from '../../../styles/grid';

const PageFooter = () => (
  <div>
    <div className={css(styles.col)}>
      <strong>Umami Magazine & Umami Publications</strong> are purely fictional companies used for illustrative
      purposes only.
    </div>
    <div className={css(styles.col, styles.middleCol)}>
      Read more about this theme
    </div>
    <div className={css(styles.col, styles.rightCol)}>
      &copy; Terms & Conditions
    </div>
  </div>
);

const styles = StyleSheet.create({
  col: {
    padding: '0 1rem 1rem 0',
    [breakpoints.echoAndUp]: {
      ...grid.span(3),
      padding: '0 1rem 0 0',
    }
  },
  middleCol: {
    [breakpoints.echoAndUp]: {
      textAlign: 'right',
    }
  },
  rightCol: {
    [breakpoints.echoAndUp]: {
      padding: 0,
    }
  },
});

export default PageFooter;
