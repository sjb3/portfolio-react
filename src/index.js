'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import { Resume } from './Components/Resume';
import { Contact } from './Components/Contact';
import { App } from './Components/App';
import { NotFound404 } from './Components/NotFound404';

import './scss/base.scss';
import './scss/lib/_theme.scss';

window.React = React;

render (
    /*<div>
        <h1 class="intro-main">
            Your Nav Bar
            <ul class="nav-ul">
              <li><a></a></li>
              <li><a href="./Resume.js">Resume</a></li>
              <li><a href="./Contact.js">Contact</a></li>
            </ul>
        </h1>
    </div>,*/
    // <Resume />,
    // <Contact />,
    // <NotFound404 />,
    // <App />,
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="resume" component={App} />
        <Route path="contact" component={App} />
        <Route path="*" component={NotFound404} />
    </Router>,
    document.getElementById('react-container')
)
