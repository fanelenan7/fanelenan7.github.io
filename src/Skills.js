import React from 'react';

import './Skills.scss';

const Skills = () => (
  <article className="skills">
    <h1 className="skills__title">
      Skills
    </h1>
    <section className="skills__sections">
      <div className="skills__section__tech">
        <i className="fa fa-code fa-3x skills__tech__icon"></i>
        <h2>technical skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>Ember.js</li>
          <li>Redux</li>
          <li>Django</li>
          <li>Selenium (Python)</li>
          <li>PostgreSQL</li>
          <li>CSS / SCSS</li>
          <li>HTML</li>
        </ul>
      </div>
      <div className="skills__section__additional">
        <i className="fa fa-bolt fa-3x skills__add__icon"></i>
        <h2>additional skills</h2>
        <ul>
          <li>Graphic Design</li>
          <li>Adobe Creative Suite</li>
          <li>Sketch</li>
          <li>Agile Methodologies</li>
          <li>Bilingual (English / Russian)</li>
          <li>Nerd Power</li>
        </ul>
      </div>
    </section>
  </article>
);

export default Skills;
