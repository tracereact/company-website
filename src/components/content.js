import React from 'react';
import About from './about';
import '../styles/content.css';

const Content = () => {
  return (
    <div className="content">
      <div id="about">
        <About />
      </div>
    </div>
  );
};

export default Content;