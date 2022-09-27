import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/utils/button.css';

const Button = (props) => {
  const { type, name, link, onButtonClicked } = props;

  Button.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
    onButtonClicked: PropTypes.func
  };

  Button.defaultProps = {
    link: '',
    onButtonClicked: () => {} // Default is to do nothing
  };

  if (type === 'submit') {
    return (
      <div className="custom">
        <button className="custom" type="submit">
          {name}
        </button>
      </div>
    );
  }

  return (
    <div className="custom">
      <a href={link} onClick={onButtonClicked}>{name}</a>
    </div>
  );
};

export default Button;
