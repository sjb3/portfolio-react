'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import { Resume } from './Components/Resume';
import { Contact } from './Components/Contact';
import { App } from './Components/App';
import { NotFound404 } from './Components/NotFound404/NotFound404';
import { Home } from './Components/Home/Home.js';
import { Projects } from './Components/Projects/Projects';
import { GalleryList } from './Components/Gallery/GalleryList';

import './scss/base.scss';
import './scss/lib/_theme.scss';

window.React = React;

render (
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="resume" component={App} />
        <Route path="contact" component={App} />
        <Route path="home" component={App} />
        <Route path="projects" component={App} />
        <Route path="gallery-list" component={App} />
        <Route path="*" component={NotFound404} />
    </Router>,
    // <GalleryList />,
    document.getElementById('react-container')
)
