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
        Hi, my name is <span className="hl">Lena Santana</span>, and I'm a DC based Software Engineer with 6 years of professional experience in Front-End and <span className="hl">UI/UX</span>, specializing in JavaScript, React and CSS. I worked for both small startups and large enterprise corporations. I have extensive experience in turning wireframes and designs into beautiful and functional websites and applications.
      </p>
      <p className="home__intro__paragraph">
        My preferred technology is <span className="hl">React</span>, but I am interested in other Front-End frameworks. I am passionate about good UX and accessibility, as well as mobile-first design.
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
