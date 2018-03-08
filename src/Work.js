import React from 'react';

import ibmwh from './assets/ibmwh.png';
import avc from './assets/av&c.jpeg';
import releaf from './assets/releaf.png';

import './Work.css';

const Work = () => (
  <article className="work">
    <section className="work__section">
      <h2>Professional Work</h2>
      <h3>I had the opportunity to work on projects for</h3>
      <ul className="work__prof">
        <li className="work__prof__list">
          <img className="work__prof__logo" src={ibmwh} alt="IBM Watson Health" />
        </li>
        <li className="work__prof__list">
          <img className="work__prof__logo" src={avc} alt="AV&C" />
        </li>
        <li className="work__prof__list">
          <img className="work__prof__logo" src={releaf} alt="Releaf App" />
        </li>
      </ul>
      <hr />
    </section>
    <section className="work__section">
      <h2>Personal Projects</h2>
      <h3>learning, experimentation and fun</h3>

    </section>
  </article>
);

export default Work;
