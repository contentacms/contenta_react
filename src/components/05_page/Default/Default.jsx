import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
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
  },
});

Default.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Default;
