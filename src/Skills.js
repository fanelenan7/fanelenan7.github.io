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
          <li>React.js</li>
          <li>Redux</li>
          <li>MobX</li>
          <li>CSS / SCSS</li>
          <li>HTML</li>
          <li>Webpack</li>
          <li>GraphQL</li>
          <li>Jest</li>
          <li>Cypress</li>
          <li>API</li>
          <li>JSON</li>
        </ul>
      </div>
      <div className="skills__section__additional">
        <i className="fa fa-bolt fa-3x skills__add__icon"></i>
        <h2>additional skills</h2>
        <ul>
          <li>Software Development</li>
          <li>Integration Testing</li>
          <li>Unit Testing</li>
          <li>VS Code</li>
          <li>Git</li>
          <li>Application Support</li>
          <li>Graphic Design</li>
          <li>Adobe Creative Suite</li>
          <li>Figma</li>
          <li>Debugging</li>
          <li>Agile Methodologies</li>
          <li>Bilingual (English / Russian)</li>
          <li>Nerd Power</li>
        </ul>
      </div>
    </section>
  </article>
);

export default Skills;
