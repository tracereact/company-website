import React from 'react';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="links">
        <a
          href="https://github.com/tracereact"
          target="_blank"
          rel="noreferrer"
        >
          <i className="github icon fa-brands fa-github" />
        </a>
        <a
          href="https://linkedin.com/in/travismcginley"
          target="_blank"
          rel="noreferrer"
        >
          <i className="linkedin icon fa-brands fa-linkedin" />
        </a>
      </div>
      <div className="page-top">
        <a href="https://linkedin.com/in/travismcginley">
          <i className="icon fa-solid fa-arrow-up" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
