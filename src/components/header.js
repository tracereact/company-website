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
      <div className="menu">
        <ul className="menu-items">
          <li className="menu-item">HOME</li>
          <li className="menu-item">ABOUT</li>
          <li className="menu-item">PROJECTS</li>
          <li className="menu-item">BLOG</li>
          <li className="menu-item">CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
