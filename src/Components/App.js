'use strict';

import React from 'react';
import { Router, Switch, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Contact } from './Contact';
import { Resume } from './Resume';
import { Menu } from './Menu';
import { Home } from './Home/Home';
import { Projects } from './Projects/Projects';
import { GalleryList } from './Gallery/GalleryList';

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
        (this.props.location.pathname === "/projects") ?
          <Projects /> :
        (this.props.location.pathname === "/gallery-list") ?
          <GalleryList /> :
        <Home />
        }
      </div>
    )
  }
}

