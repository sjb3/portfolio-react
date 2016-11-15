'use strict';

import React from 'react';
import {Link} from 'react-router';

//refactored to be stateless
export const Header = (props) => {
    return(
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li><Link to={"/home"} activeStyle={{color: "red"}}>Home</Link></li>
              <li><Link to={"/about"} activeStyle={{color: "red"}}>About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
  );
};
