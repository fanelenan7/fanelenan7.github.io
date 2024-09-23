import React from 'react';

import coder from './assets/coder-ipsum.jpg';
import people from './assets/people-finder.jpg';
import tower from './assets/tower-of-hanoi.jpg';

import './Work.scss';

const Work = () => (
  <article className="work">
    <section className="work__section">
      <h2>Professional Experience</h2>
      <h3>building excellence</h3>
        <ul className="work__experience">
          <li>
            <h4>Software Engineer at <a className="work__pers__link" href="https://www.springhealth.com/">Spring Health</a></h4>
            <h5>12/2021 – 03/2023</h5>
            <p className="work__pers__text">
              • Developed and maintained project user-facing project built in React.js with TypeScript and GraphQL
              • Built new reusable components in React
              • Updated the application to meet accessibility requirements
              • Addressed long-standing bugs and UX issues filling the backlog
              • Added testing to improve end-to-end testing coverage of the application using Cypress
              • Helped update Next.js version
              • Worked closely with design and project management team to implement planned features in timely manner.
            </p>
          </li>
          <li>
            <h4>Software Engineer at <a className="work__pers__link" href="https://www.precisetarget.com/">PreciseTarget</a></h4>
            <h5>04/2021 – 10/2021</h5>
            <p className="work__pers__text">
              • Developed and maintained projects built in React.js with TypeScript
              • Created front-end components for multiple applications (both new and already existing)
              • Learned and adapted to a new stack while contributing to the projects
              • Integrated front-end components with back-end API calls utilizing GraphQL.
            </p>
          </li>
          <li>
            <h4>Software Engineer at <a className="work__pers__link" href="https://www.capitalone.com/">Capital One</a></h4>
            <h5>06/2019 – 02/2021</h5>
            <p className="work__pers__text">
              • Specialized in front-end on a mostly back-end team, and was responsible for maintaining and further development on all UI for team projects
              • Updated existing projects to the latest React.js releases
              • Provided guidance and support to the product team and other engineers on UI and UX questions
              • Mentored new engineers on the team
              • Created React components for the new project from scratch
              • Utilized in-house UI library for a consistent look across multiple products
              • Utilized MobX for state management
              • Presented new features to the stakeholders
              • Designed responsive mobile-first interfaces
              • Used styled-components library.
            </p>
          </li>
          <li>
            <h4>Support Engineer at <a className="work__pers__link" href="https://www.marianatek.com/">Mariana Tek</a></h4>
            <h5>04/2018 – 04/2019</h5>
            <p className="work__pers__text">
              • Triaged, investigated and documented incoming issues and bug reports
              • Implemented bug fixes for both the front and back end of multiple applications utilizing Ember.js and Django
              • Wrote end-to-end acceptance tests for new and existing code in Selenium
              • Provided customer service colleagues with technical expertise
              • Aided new clients integrating with the platform
              • Created documentation website to support new client integration.
            </p>
          </li>
          <li>
            <h4>Software Developer at <a className="work__pers__link" href="http://automatastudios.com/">Automata Studios</a></h4>
            <h5>05/2017 – 02/2018</h5>
            <p className="work__pers__text">
              • Worked in a fast-paced agile environment as a front-end developer, specializing in React.js
              • Utilized React Native to support and update a mobile application
              • Was responsible for the implementation, update, and maintenance of features and UI components of the company's various projects
              • Built reusable components utilizing ReactJS, Redux, and SCSS
              • Added tests in Jest
              • Created static websites to support and compliment various projects.
            </p>
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
