'use strict';

import React from 'react';
import { render } from 'react-dom';

import './scss/base.scss';
import './scss/lib/_theme.scss';

export default class Contact extends React.component {
return (
  <div>
    <h2>contact information:</h2><br>
     <!-- <i class="fa fa-phone" aria-hidden="true"></i> -->
     <h3><em>(206) 327-7850</em><h3>
     <!-- <i class="fa fa-envelope" aria-hidden="true"></i> -->
     <h3><em>klofseattle@hotmail.com</em></h3>

     <a href="https://github.com/sjb3">
     <h3><em>github.com/sjb3</h3></em></a>

     <a href="https://www.linkedin.com/in/justin-byun">
     <h3><em>linkedin.com/in/justin-byun</h3></em></a>
   </div>
 }
)
