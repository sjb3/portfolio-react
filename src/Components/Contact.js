'use strict';

import { Component } from 'react';
import { render } from 'react-dom';

import '../scss/base.scss';
import '../scss/lib/_theme.scss';

import FaGithubAlt from 'react-icons/lib/fa/github-alt';
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';
import FaPaperPlane from 'react-icons/lib/fa/paper-plane';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';

export class Contact extends Component {
  render() {
    return (
      <div className="contact-class">
        <br />
        <br />
        <br />
        <br />
        <h2 style={{textAlignLast: 'center', fontFamily: 'Ranga', color: 'white', fontSize: 50, textAlign: 'left'}}>contact information:</h2>
        <br />
        <br />
        <hr/>
        <br />
        <br />
        <FaPhoneSquare style={{float: 'left', color:'#f41685', fontSize: 30}}/>
        <h3 style={{float: 'center', textAlignLast: 'left', fontFamily: 'Ranga', fontSize: 30, color: '#f41685'}}>206) 327-7850</h3>
        <br />
        <FaPaperPlane style={{float: 'left', color:'#f41685', fontSize: 30}}/>
        <h3 style={{float: 'center', textAlignLast: 'left', fontFamily: 'Ranga', fontSize: 30, color: '#f41685'}}>klofseattle@hotmail.com</h3>
        <br />
        <a href="http://github.com/sjb3"><FaGithubAlt  style={{textAlignLast: 'center', color:'#f41685', fontSize: 30}}/></a>
        <br/>
        <br/>
        <br />
        <a href="http://linkedin.com/in/justin-byun"><FaLinkedinSquare  style={{textAlignLast: 'center', color:'#f41685', fontSize: 30}}/></a>
      </div>
      )
  }
};
