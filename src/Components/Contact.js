'use strict';

import React from 'react';
import { render } from 'react-dom';

import '../scss/base.scss';
import '../scss/lib/_theme.scss';
import '../scss/icon.scss';

import FaGithubAlt from 'react-icons/lib/fa/github-alt';
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';
import FaPaperPlane from 'react-icons/lib/fa/paper-plane';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';

export class Contact extends React.Component {
  render() {
    return (
      <div>
        <h2>contact information:</h2>
        <FaPhoneSquare />
        <h3>206) 327-7850</h3>
        <FaPaperPlane />
        <h3>klofseattle@hotmail.com</h3>
        <a href="github.com/sjb3"><FaGithubAlt /></a>

        <a href="linkedin.com/in/justin-byun"><FaLinkedinSquare /></a>
      </div>
      )
  }
};
