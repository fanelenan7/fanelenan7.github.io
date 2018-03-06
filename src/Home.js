import React from 'react';

import portrait from './assets/portrait.jpg'
import './Home.scss';

const Home = () => (
  <article className="home">
    <header className="home__header">
      Lena Santana
    </header>
    <section className="home__intro">
      <img src={portrait} alt="Lena's portrait" className="home__intro__portrait" />
      <p>
        Hi, my name is Lena Santana, and I'm a DC based software developer. I'm a former designer, and as such I prefer Front-End development. I am React specialist, but I can also work with other frameworks and libraries as well as plain JavaScript, and I love CSS (gasp!).
        <br />
        My skillset is in Front-End and design, and I enjoy being able to express both creative and technical side of me.
      </p>
      <hr />
    </section>
  </article>
);

export default Home;
