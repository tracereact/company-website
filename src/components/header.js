import React from 'react';
import '../styles/header.css';
// import Icon from './icon';
import Button from './utils/button';

const Header = () => {
  const [click, setClick] = React.useState(false);

  // To toggle hamburger menu on and off
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <div id="page-top" className="header">
      <div className="company-logo">
        {/* <Icon /> */}
        <div className="company-name">tracereact</div>
      </div>
      <div
        className="menu-icon"
        onClick={handleClick}
        onKeyPress={handleClick}
        role="button"
        tabIndex="0"
      >
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
        <ul className={click ? 'menu-items active' : 'menu-items'}>
          <li className="menu-item">
            <Button type="link" name="HOME" link="/" onButtonClicked={closeMobileMenu} />
          </li>
          <li className="menu-item">
            <Button type="link" name="ABOUT" link="/#about" onButtonClicked={closeMobileMenu} />
          </li>
          {/* <li className="menu-item">
            <Button type='link' name='PROJECTS' link='/#projects' />
          </li> */}
          {/* <li className="menu-item">
            <Button type='link' name='BLOG' link='/#' />
          </li> */}
          <li className="menu-item">
            <Button type="link" name="CONTACT" link="/#contact" onButtonClicked={closeMobileMenu} />
          </li>
        </ul>
    </div>
  );
};

export default Header;
