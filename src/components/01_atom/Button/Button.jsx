import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button>{props.children}</button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
};

export default Button;
