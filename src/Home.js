import React from 'react';

import portrait from './assets/portrait.jpg'
import './Home.css';

const Home = () => (
  <article className="home">
    <h1 className="home__header">
      Lena Santana
    </h1>
    <section className="home__intro">
      <img src={portrait} alt="Lena's portrait" className="home__intro__portrait" />
      <p className="home__intro__paragraph">
        Hi, my name is <span className="hl">Lena Santana</span>, and I'm a DC based software developer. I'm a former designer, and as such I prefer Front-End development. My specialization is in <span className="hl">React</span>, and I can also work with other frameworks and libraries as well as plain JavaScript. Also, I love CSS (gasp!).
        <br />
        <br />
        My skillset is in <span className="hl">Front-End</span> and <span className="hl">design</span>, and I enjoy being able to express both my creative and technical side.
      </p>
    </section>
  </article>
);

export default Home;
