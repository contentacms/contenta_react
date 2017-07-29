import React from 'react';
import { NavLink } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite';
import breakpoints from '../../../styles/breakpoints';

const links = [
  ['Home', '/', 'home'],
  // ['Features', '/features', 'features'],
  ['Recipes', '/recipes', 'recipes'],
  // ['Magazine', '/magazine', 'magazine'],
];

const Navigation = () => (
  <nav>
    <ul className={css(styles.ul)}>
      {links.map(link => (
        <li className={css(styles.li)} key={link[2]}>
          <NavLink
            activeClassName={css(styles.active)}
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
  </nav>
);

const styles = StyleSheet.create({
  ul: {
    listStyleType: 'none',
    padding: 0,
  },
  li: {
    margin: '0 0 1rem 0',
    [breakpoints.echoAndUp]: {
      display: 'inline-block',
      margin: '0 1rem 0 0',
    },
  },
  active: {
    borderBottom: '1px solid black',
  },
});

export default Navigation;
