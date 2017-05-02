'use strict';

import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import { ImageButton } from './Project.style';
import { Container } from '../Home/Home.style';


export class Projects extends Component {
  render() {
    return (
      <Container>
        <h1 style={{ marginTop: 100, fontSize: '80', fontFamily: 'VT323'}} >Zoomy Projects</h1>
        <br />
        <Zoomy
          imageUrl={require('./../../pic/mc07.jpg')}

          renderThumbnail={({ showImage }) =>
          <ImageButton onClick={showImage}>
            <img src={require('../../pic/mc07_thumb.jpg')} alt='mcQueen-collection' />
          </ImageButton>
          }
          scale={[1.1, 1.1]}
          imageProps={{
            style: {
              width: '100vw',
              height: 'auto'
            }
          }}
          />
      </Container>
    )
  }
}

