'use strict';

import { Component } from 'react';

import '../../scss/base.scss';
import '../../scss/lib/_theme.scss';

export class Gallery extends Component {
  render() {
    const { name, desc, image } = this.props

    return (
      <div className='gallery-class'>
        <h3 style={{fontFamily: 'VT323', fontSize: 42, fontStyle: 'bold'}}>
          <a style={{color: '#33FF99'}}>{ name }</a>
        </h3>
        <p>{ desc }</p>

        <img src={ image } />
        <hr />
      </div>
    )
  }
}