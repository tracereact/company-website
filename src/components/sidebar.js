import React from 'react';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="https://github.com">
        <i className="github icon fa fa-github" />
      </a>
      <a href="https://linkedin.com/in/travismcginley">
        <i className="linkedin icon fa fa-linkedin-square" />
      </a>
    </div>
  );
};

export default Sidebar;
