'use strict';

import { Component } from 'react';

export class Gallery extends Component {
  render() {
    const { name, desc, image } = this.props

    return (
      <div className='gallery-class'>
        <h3 style={{ fontFamily: 'VT323', fontSize: 33 }}>{ name }</h3>
        <p>{ desc }</p>
        <img src={ image } />
      </div>
    )
  }
}