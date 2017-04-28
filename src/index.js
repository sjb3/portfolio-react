'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Resume } from './Components/Resume';
import { Contact } from './Components/Contact';

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

    <Resume />,
    // <Contact />,
    document.getElementById('react-container')
)
