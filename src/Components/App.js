'use strict';

import React from 'react';
import { Router, Switch, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Contact } from './Contact';
import { Resume } from './Resume';
import { Menu } from './Menu';
import { Home } from './Home/Home';

export class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Menu />
        {(this.props.location.pathname === "/contact") ?
          <Contact /> :
        (this.props.location.pathname === "/resume") ?
          <Resume /> :
        (this.props.location.pathname === "/home") ?
          <Home /> :
        <Home />
        }
      </div>
    )
  }
}

