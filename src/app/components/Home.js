'use strict';

import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

export class Home extends React.Component{

  toMainPg(){
    <Router history={browserHistory}>
      <Route path={"main"} component={Main} />
    </Router>
  }
  render(){
    return(
      <div>
        <FontAwesome
        name='eye'
        onCLick={this.toMainPg.bind(this)}
        className='bigeye'
        size='7x'
        style={{ color: '0 1px 0 rgba(84, 255, 220, 0.9)' }}
        />
      </div>
    );
  }
};
