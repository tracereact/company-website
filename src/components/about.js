import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about">
      <div className="info">
        <div className="title">About</div>
        <div className="message">
          <strong>
            Hi there! I&apos;m Travis, founder and CEO of Trace React, LLC.
          </strong>
          <br />
          <br />
          <em>
            Growing up, I always had a passion for technology. From
            jail-breaking my PlayStation Portable and iPod touch to opening up
            old laptops to see how they worked, I was simply intrigued.
          </em>
          <br />
          <br />
          <strong>
            These days, I find myself deeply enjoying website development. So much so, I created a business to help design and develop
            websites for others!
          </strong>
        </div>
      </div>
      <div className="image" />
    </div>
  );
};

export default About;
