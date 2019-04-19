import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <hr />
    <span className="footer__nav">
      <Link to="/" className="footer__nav__link">Home</Link>
      <Link to="/skills" className="footer__nav__link">Skills</Link>
      <Link to="/work" className="footer__nav__link">Work</Link>
      <Link to="/contact" className="footer__nav__link">Contact</Link>
    </span>
    <span className="footer__links">
      <a href="https://github.com/fanelenan7">
        <i className="fab fa-github footer__links__link"></i>
      </a>
      <a href="https://www.linkedin.com/in/lena-santana/">
        <i className="fab fa-linkedin footer__links__link"></i>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100006390523852">
        <i className="fab fa-facebook-square footer__links__link"></i>
      </a>
    </span>
  </footer>
);

export default Footer;
