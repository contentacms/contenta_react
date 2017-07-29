import React from 'react';
import Logo from '../../02_molecule/Logo/Logo';
import Navigation from '../../02_molecule/Navigation/Navigation';
import { StyleSheet, css } from 'aphrodite';
import breakpoints from '../../../styles/breakpoints';

const PageHeader = () => (
  <div>
    <div className={css(styles.block)}>
      <Logo />
    </div>
    <div className={css(styles.block, styles.nav)}>
      <Navigation />
    </div>
  </div>
);

const styles = StyleSheet.create({
  block: {
    [breakpoints.echoAndUp]: {
      display: 'inline-block',
    },
  },
  nav: {
    [breakpoints.echoAndUp]: {
      float: 'right',
    }
  },
});

export default PageHeader;
