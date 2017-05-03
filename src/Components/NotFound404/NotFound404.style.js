'use strict';

import styled from 'styled-components';

import '../../scss/base.scss';
import '../../scss/lib/_theme.scss';

export const NotFoundBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(${require('../../pic/404.jpg')});
  background-ize: 100%;
  z-index: -99;
  background-repeat: no-repeat;
  background-position: center;
`