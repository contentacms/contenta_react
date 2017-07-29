import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../../03_organism/PageHeader/PageHeader';
import PageFooter from '../../03_organism/PageFooter/PageFooter';

const Default = (props) => (
  <div>
    <PageHeader />
    <div>
      {props.children}
    </div>
    <PageFooter />
  </div>
);

Default.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Default;
