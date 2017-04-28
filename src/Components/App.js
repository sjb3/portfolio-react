'use strict';

import React from 'react';
import { Router, Switch, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Nav } from './Nav';
import { Contact } from './Contact';
import { Resume } from './Resume';

/*export class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Router>
          <Route path="/" component={App}>
            <Route path="Resume" component={Resume} />
            <Route path="Contact" component={Contact} />
          </Route>
        </Router>
      </div>
    )
  }
}*/

export class App extends React.Component {
  render () {
    return (
      <div className="app-class">
        <ul>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}