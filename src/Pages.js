import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';

import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import NotFound from './NotFound';

import './Pages.scss';

export default class Pages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entered: false,
      in: true,
    };
  }

  componentWillUnmount() {
    this.setState({ in: false });
  }

  render() {
    return (
      <div className="pages">
        <CSSTransition
          timeout={{
            enter: 2500,
            exit: 0,
          }}
          classNames="pages"
          in={this.state.in}
          onEntered={() => { this.setState({ entered: true }); }}
          >
            <main className={`pages__${(this.state.entered) ? 'enter' : 'enter--active'}`}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/skills" component={Skills} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </main>
        </CSSTransition>
      </div>
    );
  };
};
