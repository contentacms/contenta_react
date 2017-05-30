import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Button from '../../01_atom/Button/Button';
import Teaser from '../../02_molecule/Teaser/Teaser';
import Grid from '../../00_base/Grid/Grid.js';
import dummyContent from '../../../dummy-content';

const TeaserList = (props) => (
  <div>
    <ul className={css(styles.context)}>
    {dummyContent.filter(content => content.category === props.category).map((content, index) =>
        <li className={css(styles.span)} key={index}>
          <Teaser tags={content.tags} title={content.title} />
        </li>
    )}
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

export default TeaserList;
