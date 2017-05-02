'use strict';

import React, { Component } from 'react';
import WayPoint from 'react-waypoint';

export class WhenInView extends Component {
  constructor(props){
    super(props)
    this.state= {
      isInView: false
    };

    this.onEnter = this.onEnter.bind(this);
  }

  onEnter({previousPosition}){
    if(previousPosition === WayPoint.below) {
      this.setState({
        isInView: true
      })
    }
  }

  render() {
    return (
      <div>
        <WayPoint onEnter={this.onEnter}></WayPoint>
        {this.props.children({ isInView: this.state.isInView })}
      </div>
    );
  }
}