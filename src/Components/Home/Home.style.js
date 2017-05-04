'use strict';

import styled, { css } from 'styled-components';

import '../../scss/base.scss';
import '../../scss/lib/_theme.scss';

// export const Image = styled.img`
//   width: 100%;
// `;

// export const HeroImage = styled.div`
//   height: 100vh;
//   background-image: url('${require('../../assets/hero.gif')}');
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;

//   display: flex;
//   flex-direction: column;
//   align-content: center;
//   justify-content: center;

//   text-align: center;
//   color: white;

//   font-size: 2em;

//   h1 {
//     margin-bottom: 0;
//   }
// `;

// export const NoirBalletMov = styled.div `
//   height: 1--vh;
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   flex-direction: column;
//   align-content: center;
//   justify-content: center;
//   text-align: center;
// `

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;

    transform-origin: left;
    transform: rotateY(90deg);

    transition: transform 1s;
  }

  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;

export const Container = styled.div `
  padding-left: 60px;
  // padding-right: 60px;
  padding-top: 59px
`;