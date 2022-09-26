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
          <li className="menu-item">
            <a href="/">HOME</a>
          </li>
          <li className="menu-item">
            <a href="/#about">ABOUT</a>
          </li>
          <li className="menu-item">
            <a href="/#projects">PROJECTS</a>
          </li>
          <li className="menu-item">
            <a href="/#">BLOG</a>
          </li>
          <li className="menu-item">
            <a href="/#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
