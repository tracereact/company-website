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
      <a href="https://linkedin.com/in/travismcginley">
        <i className="top icon fa-regular fa-angle-up" />
      </a>
    </div>
  );
};

export default Sidebar;
