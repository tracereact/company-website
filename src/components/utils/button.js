import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/utils/button.css';

const Button = (props) => {
  const {
    type,
    name,
    link
  } = props;

  Button.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string
  };

  Button.defaultProps = {
    link: ''
  };

  if (type === 'submit') {
    return (
      <div className="custom"><button type="submit">{name}</button></div>
    );
  }
  
  return (
    <div className="custom"><a href={link}>{name}</a></div>
  );
  
};

export default Button;