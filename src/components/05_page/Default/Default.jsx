import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Colours from '../../00_base/Colours/Colours';
import PageHeader from '../../03_organism/PageHeader/PageHeader';

const Default = (props) => (
  <div className={css(styles.container)}>
    <PageHeader />
    <div>
      {props.children}
    </div>
  </div>
);

const styles = StyleSheet.create({
  container: {
    background: Colours.white,
  },
});

Default.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Default;
