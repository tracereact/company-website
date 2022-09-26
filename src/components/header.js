import React from 'react';
import '../styles/header.css';
import Icon from './icon';

const Header = () => {
  return (
    <div id="page-top" className="header">
      <div className="company-logo">
        <Icon />
        <div className="company-name">tracereact</div>
      </div>
    </div>
  );
};

export default Header;
