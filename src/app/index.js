'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Home} from './components/Home';
import {Root} from './components/Root';
import {About} from './components/About';

class App extends React.Component{
  render(){
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root}>
          <IndexRoute component={Home}/>//setting as default
          <Route path={"home"} component={Home} />
          <Route path={"about"} component={About} />
        </Route>
      </Router>
    );
  }
}

render(<App />, window.document.getElementById('app'));
