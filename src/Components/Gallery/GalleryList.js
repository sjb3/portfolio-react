'use strict';


import { Component } from 'react';
// import fetch from 'isomorphic-fetch';
import { Gallery } from './Gallery';

export class GalleryList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      gallerys: [
        {
          name: 'kawa01',
          desc: 'Rei Kawakubo',
          image: 'http://artflyer.net/wp-content/uploads/2017/01/Rei-Kawakubo.jpg'
        },
        {
          name: 'kawa02',
          desc: 'Rei Kawakubo',
          image: 'http://www.hausderkunst.de/uploads/pics/HdK_Rei-Kawakubo-Comme-des-Garcons-540.jpg'
        },
        {
          name: 'kawa03',
          desc: 'Rei Kawakubo',
          image: 'http://1.bp.blogspot.com/-V9YehA06wsA/TZDP_tr4hNI/AAAAAAAAB_c/YBqLyvusiAQ/s1600/tumblr_lhdg60mF9N1qgrlpao1_500.jpg'
        }
      ]
    }
  }

  render() {
    const { gallerys } = this.state

    return (
      <div className='gallery-list-class'>
        <h1>Celebrating Rei Kawakubo's Met Museum Exhibition!</h1>
          { gallerys.map(
            (data, i) =>
              <Gallery key={i} {...data} />
          )}
      </div>
    )
  }


}