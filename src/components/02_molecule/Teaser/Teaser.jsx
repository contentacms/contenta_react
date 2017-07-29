import React from 'react';
import Picture from '../../01_atom/Picture/Picture';
import { StyleSheet, css } from 'aphrodite';

const Teaser = (props) => (
  <div>
    <div className={css(styles.header)}>
      {props.surtitle &&
        <div>
          {props.surtitle}
        </div>
      }
      <div>
        {props.title}
      </div>
      <div>
        {props.subtitle}
      </div>
    </div>
    <div className={css(styles.picture)} >
      <Picture uri={props.image} />
    </div>
  </div>
);

const styles = StyleSheet.create({
  header: {
    height: '3rem',
    overflow: 'hidden',
  },
  picture: {
    maxHeight: '150px',
    overflow: 'hidden',
  },
});

export default Teaser;
