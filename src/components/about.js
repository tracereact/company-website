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
            These days, I find myself deeply enjoying website development. So
            much so, I created a business to help design, develop, <em>and</em>{' '}
            host websites for others! I love bringing ideas to life with
            eye-pleasing designs and slick animations.
          </strong>
          <br />
          <br />
          <strong>
            I work with React, JavaScript (ES6+), CSS, and Firebase to deliver
            quality products in a timely manner; view my resume&nbsp;
            <span>
              <a
                href="https://linkedin.com/in/travismcginley"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
            </span>
            .&nbsp;Feel free to reach out using the form&nbsp;
            <span>
              <a href="/#contact">below</a>
            </span>
            &nbsp;if you would like to learn more.
          </strong>
        </div>
      </div>
      <div className="image" />
    </div>
  );
};

export default About;
