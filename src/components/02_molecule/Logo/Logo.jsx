import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Colors } from '../../../styles/styles';

const Logo = () => <div className={css(styles.logo)}>Umami</div>;

const styles = StyleSheet.create({
  logo: {
    color: Colors.shades.white,
    fontFamily: 'Helvetica',
    fontSize: '2.1rem',
    fontWeight: 'bold',
  },
});

export default Logo;
