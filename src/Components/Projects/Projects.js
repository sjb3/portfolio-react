'use strict';

import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import ParallaxImage from 'react-image-parallax2';

import { ImageButton, Flex, ImageContainer } from './Project.style';
import { Container } from '../Home/Home.style';

import '../../scss/base.scss';
import '../../scss/lib/_theme.scss';

export class Projects extends Component {
  render() {
    return (
      <Container className='projects-container'>

        <div marginBottom="100px">
          <index>
            <h1 style={{ marginTop: 100, fontSize: '80', fontFamily: 'VT323'}}>Parallax2</h1>
          </index>
          <ImageContainer>
            <ParallaxImage
              reduceHeight={1/2}
              src={require('../../pic/mcqueen.jpg')}
            >

            </ParallaxImage>
          </ImageContainer>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
        <h1 style={{ marginTop: 100, fontSize: '80', fontFamily: 'VT323'}} >Zoomy Projects</h1>
        <br />

        <Flex justify={'center'}>
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
        </Flex>


      </Container>
    )
  }
}

