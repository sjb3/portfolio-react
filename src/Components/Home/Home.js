'use strict';

import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
// import { BreakParagraph } from 'react-break-paragraph';
// import { StaggeredMotion, spring } from 'react-motion';

import { RevealP, Container, SpecialSpan, SpecialSpanFather } from './Home.style';
import { WhenInView } from '../WhenInView/WhenInView';

import '../../scss/base.scss';
import '../../scss/lib/_theme.scss';



export class Home extends Component {
  // static propTypes = {};

  render() {
    return (

      <Container className='home-class'>
        {/*<ReactPlayer
                    controls
                    url={require('../../media/noir.mp4')}
                    playing
                    loop='true'
                    width='100vw'
                    height='100vh'
                    playbackRate='0.4'>
        </ReactPlayer>*/}

        <ReactPlayer
                     controls
                     url="https://www.youtube.com/watch?v=YZudtHH-MFw"
                     playing
                     loop='true'
                     width='100vw'
                     height='100vh'
                     volumne='mute'
                     playbackRate='0.4'>
        </ReactPlayer>

        <br />
        <br />
        <br />
        <h1 style={{marginTop: 400, marginTop: 200, float: 'center', color:'black', opacity: 0.7, fontSize: 130, fontFamily: 'Bungee Inline', fontStyle: 'italic'}}>H O M E</h1>
        <br />
        <hr />
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
