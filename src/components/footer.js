import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
      Copyright &copy; Tracereact, LLC 2022
      </div>
      <div className="icon8">
        Icons Supplied by&nbsp;
        <span>
          <a 
            href="https://icons8.com/"
            target="_blank"
            rel="noreferrer"
          >
            Icon 8
          </a>  
        </span>
        &nbsp;and&nbsp;
        <span>
          <a
            href="https://fontawesome.com/"
            target="_blank"
            rel="noreferrer"
          >
            Font Awesome
          </a>  
        </span>
      </div>
    </div>
  );
};

export default Footer;
