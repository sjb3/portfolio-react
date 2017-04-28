'use strict';

import React from 'react';
import { render } from 'react-dom';

import '../scss/base.scss';
import '../scss/lib/_theme.scss';

import FaGithubAlt from 'react-icons/lib/fa/github-alt';
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';
import FaPaperPlane from 'react-icons/lib/fa/paper-plane';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';

export class Contact extends React.Component {
  render() {
    return (
      <div>
        <h2 style={{textAlignLast: 'center', fontFamily: 'Ranga', color: 'white', fontSize: 40, textAlign: 'left'}}>contact information:</h2>
        <hr/>
        <br />
        <br />
        <FaPhoneSquare style={{color:'#f90404', fontSize: 30}}/>
        <h3 style={{textAlignLast: 'left', color: '#f90404'}}>206) 327-7850</h3>
        <FaPaperPlane style={{color:'#f90404', fontSize: 30}}/>
        <h3 style={{textAlignLast: 'left', color: '#f90404'}}>klofseattle@hotmail.com</h3>
        <a href="http://github.com/sjb3"><FaGithubAlt  style={{textAlignLast: 'center', color:'#f90404', fontSize: 30}}/></a>
        <br/>
        <br/>
        <a href="http://linkedin.com/in/justin-byun"><FaLinkedinSquare  style={{textAlignLast: 'center', color:'#f90404', fontSize: 30}}/></a>
      </div>
      )
  }
};
