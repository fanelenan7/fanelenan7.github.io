import React from 'react';

import './Contact.scss';

const Contact = () => (
  <article className="contact">
    <h1>Contact Me</h1>
    <h2>Let's work together</h2>
    <ul className="contact__main">
      <li><i className="fa fa-phone contact__main__icon"></i> 540.429.4447</li>
      <li>
        <a className="contact__main__link" href="mailto:fanelenan7@gmail.com">
          <i className="fa fa-envelope contact__main__icon"></i> fanelenan7@gmail.com
        </a>
      </li>
      <li>
        <a className="contact__main__link" href="https://www.linkedin.com/in/lena-santana/">
          <i className="fab fa-linkedin contact__main__icon"></i>
          https://www.linkedin.com/in/lena-santana/
        </a>
      </li>
      <li>
        <a className="contact__main__link" href="https://github.com/fanelenan7">
          <i className="fab fa-github contact__main__icon"></i>
          https://github.com/fanelenan7
        </a>
      </li>
      <li>
        <a className="contact__main__link" href="https://drive.google.com/file/d/0B4gjTdu9xyyDb3pRMnJ5ekZyS3M/view?usp=sharing">
          <i className="fa fa-file contact__main__icon"></i>
          view / download resume
        </a>
      </li>
    </ul>
  </article>
);

export default Contact;
