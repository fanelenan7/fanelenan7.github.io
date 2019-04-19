import React from 'react';

import ibmwh from './assets/ibmwh.png';
import avc from './assets/av&c.jpeg';
import releaf from './assets/releaf.png';
import coder from './assets/coder-ipsum.jpg';
import people from './assets/people-finder.jpg';
import tower from './assets/tower-of-hanoi.jpg';
import mariana from './assets/mariana.png';
import barrys from './assets/barrys.png';
import brrrn from './assets/brrrn.png';
import bikerbarre from './assets/bikerbarre.jpg';
import sculpthouse from './assets/sculpthouse.png';

import './Work.scss';

const Work = () => (
  <article className="work">
    <section className="work__section">
      <h2>Professional Work</h2>
      <h3>I had the opportunity to work on projects for following companies</h3>
      <ul className="work__prof">
        <li className="work__prof__list">
          <img className="work__prof__logo" src={mariana} alt="Barry's Bootcamp" />
          <p>Mariana Tek</p>
        </li>
        <li className="work__prof__list">
          <img className="work__prof__logo" src={barrys} alt="Barry's Bootcamp" />
          <p>Barry's Bootcamp</p>
        </li>
        <li className="work__prof__list">
          <img className="work__prof__logo" src={bikerbarre} alt="Biker Barre" />
          <p>Biker Barre</p>
        </li>
        <li className="work__prof__list">
          <img className="work__prof__logo" src={brrrn} alt="Barry's Bootcamp" />
          <p>Brrrn</p>
        </li>
        <li className="work__prof__list">
          <img className="work__prof__logo" src={sculpthouse} alt="Barry's Bootcamp" />
          <p>Sculpthouse</p>
        </li>
        <li className="work__prof__list">
          <img className="work__prof__logo" src={ibmwh} alt="IBM Watson Health" />
          <p>IBM Watson Health</p>
        </li>
        <li className="work__prof__list">
          <img className="work__prof__logo" src={avc} alt="AV&C" />
          <p>AV&C</p>
        </li>
        <li className="work__prof__list">
          <img className="work__prof__logo" src={releaf} alt="Releaf App" />
          <p>Releaf App</p>
        </li>
      </ul>
      <hr />
    </section>
    <section className="work__section">
      <h2>Personal Projects</h2>
      <h3>learning, experimentation and fun</h3>
      <ul className="work__pers">
        <li className="work__pers__list">
          <a href="http://people-finder.surge.sh/" className="work__pers__img-link">
            <img className="work__pers__img" src={people} alt="People Finder" />
          </a>
          <p className="work__pers__text">
            <a className="work__pers__link" href="http://people-finder.surge.sh/">People Finder</a>,
            a project/code challenge I have completed for Automata Studios. It uses a slightly creepy
            but somewhat useful API called FullContact. Give it a spin, see what it knows about you.
            And then, possibly, freak out and try to cover up your digital tracks, because all that
            is taken just from publicly available information.</p>
        </li>
        <li className="work__pers__list">
          <a href="http://coder-ipsum.surge.sh/" className="work__pers__img-link">
            <img className="work__pers__img" src={coder} alt="Coder Ipsum" />
          </a>
          <p className="work__pers__text">
            <a className="work__pers__link" href="http://coder-ipsum.surge.sh/">Coder Ipsum</a>,
            my final project at General Assembly, a custom lorem ipsum generator. It's just about
            what it is. Obviously, developer themed. I just thought it was a fun and silly thing
            to do. Built with React (my first ever app in React), and I only chose to do that
            because I didn't understand it. Worked out, since I love React now!</p>
        </li>
        <li className="work__pers__list">
          <a href="https://panoramic-snakes.surge.sh/" className="work__pers__img-link">
            <img className="work__pers__img" src={tower} alt="Tower of Hanoi" />
          </a>
          <p className="work__pers__text">
            <a className="work__pers__link" href="https://panoramic-snakes.surge.sh/">Tower of Hanoi</a>,
            a simple logic game where your goal is to move all the disks from the first field to the last
            one. You can only move one disk at a time, only a top one and you can't put a larger ring on
            top of a smaller one. It was a great way to learn about logic during my first weeks in a coding
            bootcamp, and I made all the graphics for it myself.</p>
        </li>
      </ul>
    </section>
  </article>
);

export default Work;
