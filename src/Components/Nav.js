'use strict';

import { Component } from 'react';
import { Link } from 'react-router';

export class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-container">
          <Link to="/" className="nav-brand">
          </Link>
          <div className="nav-right">
            <ul className="nav-item-wrapper">
              <li className="nav-item">
                <Link className="nav-link" to="/Resume">Resume</Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">Contact</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};