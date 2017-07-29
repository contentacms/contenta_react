import React from 'react';
import Picture from '../../01_atom/Picture/Picture';
import { StyleSheet, css } from 'aphrodite';

const Teaser = (props) => (
  <div className={css(styles.container)}>
    {!props.flipped &&
      <div className={css(styles.picture)} >
        <Picture uri={props.image} />
      </div>
    }

    <div className={css(styles.text)}>
      {props.surtitle &&
        <div>
          {props.surtitle}
        </div>
      }
      <div>
        {props.title}
      </div>
      <div className={css(styles.subtitle)}>
        {props.subtitle}
      </div>
    </div>

    {props.flipped &&
      <div className={css(styles.picture)} >
        <Picture uri={props.image} />
      </div>
    }
  </div>
);

const styles = StyleSheet.create({
  container: {
    border: '1px solid #ccc',
  },
  text: {
    height: '6rem',
    overflow: 'hidden',
    padding: '1rem',
  },
  picture: {
    maxHeight: '150px',
    overflow: 'hidden',
  },
  subtitle: {
    fontSize: '0.7rem',
  },
});

export default Teaser;
