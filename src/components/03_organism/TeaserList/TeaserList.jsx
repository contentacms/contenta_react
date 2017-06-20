import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Button from '../../01_atom/Button/Button';
import Teaser from '../../02_molecule/Teaser/Teaser';
import { Grid } from '../../../Styles';

const TeaserList = (props) => (
  <div>
    <ul className={css(styles.context)}>
      {props.teasers.map(teaser => (
        <li key={teaser.id}>
          <Teaser title={teaser.title} subtitle={teaser.subtitle} />
        </li>
      ))}
    </ul>
    <Button>more</Button>
  </div>
);

const styles = StyleSheet.create({
  context: Grid.context,
  span: {
    ...Grid.span(3),
    display: 'block',
    padding: '1rem',
  },
});

TeaserList.defaultProps = {
  teasers: [],
};

export default TeaserList;
