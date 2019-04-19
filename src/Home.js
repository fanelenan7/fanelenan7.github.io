import React from 'react';

import portrait from './assets/portrait.jpg'
import './Home.scss';

const Home = () => (
  <article className="home">
    <h1 className="home__header">
      Lena Santana
    </h1>
    <h3 className="home__subhed">Software Engineer</h3>
    <section className="home__intro">
      <img src={portrait} alt="Lena's portrait" className="home__intro__portrait" />
      <p className="home__intro__paragraph">
        Hi, my name is <span className="hl">Lena Santana</span>, and I'm a DC based software developer. I'm a former designer, and as such I prefer Front-End development. However, I'm interested in learning more about Back-End development as well.
      </p>
      <p className="home__intro__paragraph">
        My last role was a Support Engineer, where I got to work on a wide range of projects, fix bugs on Front and Back-End of applications, and even brush up on my SQL. My other responsibility was to provide technical expertise to my customer support colleagues and help them work as efficiently as possible. I learned Ember.js and Django, which were primary technologies at the company I worked. However, my favorite technology is <span className="hl">React</span>, but I am interested in other FE frameworks.
        <br />
        <br />
        My skillset is in <span className="hl">Front-End</span> and <span className="hl">design</span>, and I enjoy being able to express both my creative and technical side.
        <br />
        I am looking for a new opportunity now, contact me if you have something in mind!
      </p>
    </section>
  </article>
);

export default Home;
