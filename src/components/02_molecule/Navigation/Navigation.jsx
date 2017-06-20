import React from 'react';
import {
  Link
} from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite';
import { Breakpoints, Colours, ZLevels } from '../../../Styles';

const Navigation = () => (
  <nav className={css(styles.nav)}>
    <div className={css(styles.wrapper)}>
      <ul className={css(styles.ul)}>
        <li className={css(styles.li)}><Link className={css(styles.liA)} to="/">Home</Link></li>
        <li className={css(styles.li)}><Link className={css(styles.liA)} to="/recipes">Recipe Landing</Link></li>
      </ul>
    </div>
  </nav>
);

const styles = StyleSheet.create({
  nav: {
    color: Colours.shades.white,
    ...ZLevels.zDepth1,
    backgroundColor: Colours.red.lighten2,
    width: '100%',
    height: '56px',
    lineHeight: '56px',
    [`@media ${Breakpoints.mediumAndUp}`]: {
      minHeight: '64px',
      height: '64px',
    }
  },
  a: {
    color: Colours.shades.white,
  },
  wrapper: {
    position: 'relative',
    height: '100%',
  },
  logo: {
    position: 'absolute',
    color: Colours.shades.white,
    display: 'inline-block',
    FontSize: '2.1rem',
    padding: 0,
    whiteSpace: 'nowrap',
    [`@media ${Breakpoints.mediumAndDown}`]: {
      left: '50%',
      transform: 'translateX(-50%)',
    }
  },
  ul: {
    margin: 0,
  },
  li: {
    listStyleType: 'none',
    transition: 'background-color .3s',
    float: 'left',
    padding: 0,
  },
  liA: {
    transition: 'background-color .3s',
    fontSize: '1rem',
    color: Colours.shades.white,
    display: 'block',
    padding: '0 15px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,.1)',
    }
  }
});

export default Navigation;
