'use strict';

import React from 'react';
import { Router, Switch, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Nav } from './Nav';
import { Contact } from './Contact';
import { Resume } from './Resume';

export class App extends React.Component {
  render () {
    return (
      <div className="app">
        {(this.props.location.pathname === "/contact") ?
          <Contact /> :
        (this.props.location.pathname === "/resume") ?
          <Resume /> :
        <Resume />
        }
      </div>
    )
  }
}

/*export class App extends React.Component {
  render () {
    return (
      <div className="app-class">
        <ul>
          <li>Resume</li>
          <li>Contact</li>
          <li>NotFound404</li>
        </ul>
      </div>
    )
  }
}*/