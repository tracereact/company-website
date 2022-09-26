import React from 'react';
import '../styles/sidebar.css';

const Sidebar = () => {
  const scrollUp = () => {
    document.getElementById('page-top').scrollIntoView(true);
  };

  return (
    <div className="sidebar">
      <div className="links">
        <a
          href="https://github.com/tracereact"
          target="_blank"
          rel="noreferrer"
        >
          <i className="github icon link fa-brands fa-github" />
        </a>
        <a
          href="https://linkedin.com/in/travismcginley"
          target="_blank"
          rel="noreferrer"
        >
          <i className="linkedin icon link fa-brands fa-linkedin" />
        </a>
      </div>
      <div className="return-top">
        <div onClick={scrollUp} aria-hidden="true">
          <i className="icon fa-solid fa-arrow-up" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
