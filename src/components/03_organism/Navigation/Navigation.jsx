import React from 'react';
import Logo from '../../02_molecule/Logo/Logo';
import { Link, NavLink } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite';
import Breakpoints from '../../../styles/breakpoints';

const links = [
  ['Home', '/', 'home'],
  ['Recipe Landing', '/recipes', 'recipes']
];

const Navigation = () => (
  <nav className={css(styles.nav)}>
    <div className={css(styles.wrapper)}>
      <Link to="/" className={css(styles.logo)}><Logo /></Link>
      <ul className={css(styles.ul)}>
        {links.map(link => (
          <li className={css(styles.li)} key={link[2]}>
            <NavLink
            activeClassName={css(styles.activeLink)}
            className={css(styles.link)}
            isActive={(match, location) => {
              return (match && match.path === location.pathname);
            }}
            to={link[1]}
          >
              {link[0]}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

const styles = StyleSheet.create({
  nav: {
    // color: Colors.shades.white,
    // ...ZLevels.zDepth1,
    // backgroundColor: Colors.red.lighten2,
    width: '100%',
    height: '56px',
    lineHeight: '56px',
    [`@media ${Breakpoints.mediumAndUp}`]: {
      minHeight: '64px',
      height: '64px',
    }
  },
  wrapper: {
    position: 'relative',
    height: '100%',
  },
  logo: {
    position: 'absolute',
    display: 'inline-block',
    padding: '0 1rem',
    whiteSpace: 'nowrap',
    [`@media ${Breakpoints.mediumAndDown}`]: {
      left: '50%',
      transform: 'translateX(-50%)',
    }
  },
  ul: {
    margin: 0,
    padding: 0,
    display: 'inline-block',
    float: 'right',
  },
  li: {
    display: 'inline-block',
    listStyleType: 'none',
    transition: 'background-color .3s',
    padding: 0,
  },
  link: {
    transition: 'background-color .3s',
    fontSize: '1rem',
    // color: Colors.shades.white,
    display: 'block',
    padding: '0 15px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,.1)',
    }
  },
  activeLink: {
    backgroundColor: 'rgba(0,0,0,.1)',
  }
});

export default Navigation;
