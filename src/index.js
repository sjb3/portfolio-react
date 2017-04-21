'use strict';

import React from 'react';
import { render } from 'react-dom';

import './scss/base.scss';
import './scss/lib/_theme.scss';
// import './scss/vendor';

render (
    <div>
        <h1>
            Your Nav Bar
            <ul class="nav-ul">
              <li>Resume</li>
              <li>Contact</li>
            </ul>
        </h1>
    </div>,
    document.getElementById('react-container')
)
