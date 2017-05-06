'use strict';


import styled, {} from 'styled-components';
import media from './media';


export const Div = styled.div`
  ${({ marginBottom }) => marginBottom && css`
    margin-bottom: ${marginBottom};
    `}
`;

export const Container = styled(Div)`
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 30px;
  ${media.phone}`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
    `}

    ${media.tablet}`
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 15px;
    `}
`;