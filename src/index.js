'use strict';

import React from 'react';
import { render } from 'react-dom';

import './scss/base.scss';
import './scss/lib/_theme.scss';
// import './scss/vendor';

render (
    <div>
        <h1 class="intro-main">
            Your Nav Bar
            <ul class="nav-ul">
              <li><a></a></li>
              <li><a href="./Resume.js">Resume</a></li>
              <li><a href="./Contact.js">Contact</a></li>
            </ul>
        </h1>
    </div>,
    document.getElementById('react-container')
)
