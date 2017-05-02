'use strict';

import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

import { RevealP, Container } from './Home.style';
import { WhenInView } from '../WhenInView/WhenInView';


export class Home extends Component {
  // static propTypes = {};

  render() {
    return (
      <Container>
        <video id='background-video' loop autoPlay>
          <source src='../../media/noir.mp4' type='video/mp4' />
        </video>

        <h1 style={{marginTop: 400, marginTop: 200, float: 'center', color:'#718df2', fontSize: 130, fontFamily: 'Bungee Inline', fontStyle: 'italic'}}>H O M E</h1>
        <br />
        <br />
        <br />
        <br />

        {/*<video id='background-video' loop autoPlay>
          <source src='../../media/noir.mp4' type='video/mp4' />
        </video>*/}
        <ReactPlayer url='https://www.youtube.com/watch?v=YZudtHH-MFw'
                     playing
                     volume='0'
                     loop='true'
                     width='full'
                     style={{opacity: 0.8}}
                     playbackRate='0.4'
                     />

        <br />
        <br />
        <br />
        <br />
        <WhenInView>
          {({ isInView }) =>
          <RevealP hide={!isInView} style={{fontSize: 20, fontSize: 30, fontFamily: 'Nothing You Could Do'}}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        <br />
        <br />
        <br />
        <br />
        </RevealP>
          }
        </WhenInView>
                <WhenInView>
          {({ isInView }) =>
          <RevealP hide={!isInView} style={{fontSize: 20, fontSize: 30, fontFamily: 'Nothing You Could Do'}}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        <br />
        <br />
        <br />
        <br />
        </RevealP>
          }
        </WhenInView>
                <WhenInView>
          {({ isInView }) =>
          <RevealP hide={!isInView} style={{fontSize: 20, fontSize: 30, fontFamily: 'Nothing You Could Do'}}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        <br />
        <br />
        <br />
        <br />
        </RevealP>
          }
        </WhenInView>
      </Container>
    )
  }
}