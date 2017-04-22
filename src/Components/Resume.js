'use strict';

import React from 'react';
import { render } from 'react-dom';

import '../scss/base.scss';
import '../scss/lib/_theme.scss';

export class Resume extends React.Component {
  render() {
    return (
  <div className="resume-class">

    <h1>Justin Byun</h1>
    <h2 className="title"><em>Full-Stack Software Developer</em></h2>

    <h3 className="manifesto"><em>As a former Biotech Researcher, I learned the beauty of analytical skills and value of critical thinking: the artistry of science.
      Now, as a full-stack software developer, I’d like to add the artistry of science to programming to develop user-friendly, efficient and resource saving apps. </em></h3>


  </div>
    )
  }
};
