import React from 'react';
import Contact from './contact';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div id="contact" className="anchor" />
      <Contact />
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
      <div className="copyright">Copyright &copy; Trace React, LLC 2022</div>
      <div className="disclaimer">
        Icons supplied by&nbsp;
        <span>
          <a href="https://icons8.com/" target="_blank" rel="noreferrer">
            Icon 8
          </a>
        </span>
        &nbsp;and&nbsp;
        <span>
          <a href="https://fontawesome.com/" target="_blank" rel="noreferrer">
            Font Awesome
          </a>
        </span>
        <br />
        This website is&nbsp;
        <span>
          <a
            href="https://github.com/tracereact/company-website"
            target="_blank"
            rel="noreferrer"
          >
            open-source
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
