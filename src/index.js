'use strict';

import React from 'react';
import { render } from 'react-dom';

import routes from './routes';
import './scss/base.scss';
import './scss/lib/_theme.scss';

window.React = React;

render (
    routes,
    document.getElementById('react-container')
)
