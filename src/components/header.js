import React from 'react';
import '../styles/header.css';
// import Icon from './icon';
import Button from './utils/button';

const Header = () => {
  return (
    <div id="page-top" className="header">
      <div className="company-logo">
        {/* <Icon /> */}
        <div className="company-name">tracereact</div>
      </div>
      <div className="menu">
        <ul className="menu-items">
          <li className="menu-item">
            <Button type="link" name="HOME" link="/" />
          </li>
          <li className="menu-item">
            <Button type="link" name="ABOUT" link="/#about" />
          </li>
          {/* <li className="menu-item">
            <Button type='link' name='PROJECTS' link='/#projects' />
          </li> */}
          {/* <li className="menu-item">
            <Button type='link' name='BLOG' link='/#' />
          </li> */}
          <li className="menu-item">
            <Button type="link" name="CONTACT" link="/#contact" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
