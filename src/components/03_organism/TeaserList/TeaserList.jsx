import React from 'react';
import Button from '../../01_atom/Button/Button';
import Teaser from '../../02_molecule/Teaser/Teaser';
import { StyleSheet, css } from 'aphrodite';
import grid from '../../../styles/grid';
import breakpoint from '../../../styles/breakpoints';

const TeaserList = (props) => (
  <div>
    <ul className={css(styles.context)}>
      {props.teasers.map(teaser => (
        <li className={css(styles.column)} key={teaser.id}>
          <Teaser image={teaser.image} title={teaser.title} subtitle={teaser.subtitle} />
        </li>
      ))}
    </ul>
    <Button>more</Button>
  </div>
);

const styles = StyleSheet.create({
  context: grid.context,
  column: {
    display: 'block',
    padding: '1rem',
    [breakpoint.echoAndUp]: {
      ...grid.span(6),
    },
    [breakpoint.limaAndUp]: {
      ...grid.span(3),
    }
  },
});

TeaserList.defaultProps = {
  teasers: [],
};

export default TeaserList;
