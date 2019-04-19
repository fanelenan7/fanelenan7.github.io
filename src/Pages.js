import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import NotFound from './NotFound';

import './Pages.scss';

const Pages = () => (
  <div className="pages">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/skills" component={Skills} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Pages;
