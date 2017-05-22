'use strict';

import styled, { css } from 'styled-components';


import '../../scss/base.scss';
import '../../scss/lib/_theme.scss';

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
`

export const Container = styled.div `
  padding-left: 60px;
  padding-top: 59px;
`

export const SpecialSpan = styled.div`
  display: inline-block;
`

export const SpecialSpanFather = styled.div`
  display: inline-block;
  overflow: hidden;
`
