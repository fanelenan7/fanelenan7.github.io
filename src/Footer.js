import React from 'react';

import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <hr />
    <span className="footer__nav">
      <Link to="/" className="footer__nav__link">Home</Link>
      <Link to="/skills" className="footer__nav__link">Skills</Link>
      <Link to="/projects" className="footer__nav__link">Projects</Link>
      <Link to="/contact" className="footer__nav__link">Contact</Link>
    </span>
  </footer>
);

export default Footer;
