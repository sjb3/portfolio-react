'use strict';


import { Component } from 'react';
// import fetch from 'isomorphic-fetch';
import { Gallery } from './Gallery';

import '../../scss/base.scss';
import '../../scss/lib/_theme.scss';

export class GalleryList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      gallerys: [
        {
          name: 'kawa01',
          desc: 'Rei Kawakubo',
          image: require('../../pic/kawakubo/kawa01.jpg')
        },
        {
          name: 'kawa02',
          desc: 'Rei Kawakubo',
          image: require('../../pic/kawakubo/kawa02.jpg')
        },
        {
          name: 'kawa03',
          desc: 'Rei Kawakubo',
          image: require('../../pic/kawakubo/kawa03.jpg')
        },
        {
          name: 'kawa04',
          desc: 'Rei Kawakubo',
          image: require('../../pic/kawakubo/kawa04.jpg')
        },
        {
          name: 'kawa05',
          desc: 'Rei Kawakubo',
          image: require('../../pic/kawakubo/kawa05.jpg')
        },
        {
          name: 'kawa06',
          desc: 'Rei Kawakubo',
          image: require('../../pic/kawakubo/kawa06.jpg')
        },
        {
          name: 'kawa07',
          desc: 'Rei Kawakubo',
          image: require('../../pic/kawakubo/kawa07.jpg')
        },
        {
          name: 'kawa08',
          desc: 'Rei Kawakubo',
          image: require('../../pic/kawakubo/kawa08.jpg')
        },
        {
          name: 'kawa09',
          desc: 'Rei Kawakubo',
          image: require('../../pic/kawakubo/kawa09.jpg')
        },
        {
          name: 'kawa10',
          desc: 'Rei Kawakubo',
          image: require('../../pic/kawakubo/kawa10.jpg')
        },
        {
          name: 'kawa11',
          desc: 'Rei Kawakubo',
          image: require('../../pic/kawakubo/kawa11.jpg')
        },
        {
          name: 'kawa12',
          desc: 'Rei Kawakubo',
          image: require('../../pic/kawakubo/kawa12.jpg')
        },
        {
          name: 'kawa13',
          desc: 'Rei Kawakubo',
          image: require('../../pic/kawakubo/kawa13.jpg')
        }
      ]
    }
  }

  render() {
    const { gallerys } = this.state

    return (
      <div className='gallery-list-class'>
        <h1 style={{float: 'center', color: '#E8053B', fontSize: 50, fontFamily: 'Nothing You Could Do', marginTop: 100}}>Celebrating Rei Kawakubo's Met Museum Exhibition!</h1>
          { gallerys.map(
            (data, i) =>
              <Gallery key={i} {...data} />
          )}
      </div>
    )
  }


}