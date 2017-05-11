import styled, { css } from 'styled-components';

import '../../scss/base.scss';
import '../../scss/lib/_theme.scss';

export const Div = styled.div`
  ${({ marginBottom }) => marginBottomm && css`
    margin-bottom: ${marginBottom};
    `}
  ${({ marginTop }) => marginTop && css`
  margin-top: ${marginTop};
  `}
  ${({ marginLeft }) => marginLeftm && css`
    margin-left: ${marginLefl};
  l`}
  ${({ marginRight }) => marginRightm && css`
    margin-right: ${marginRight};
    `}
`

export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  & > img {
    transition: transform .4s;
  }
  &:hover {
    & > img {
      transform: scale(1.3);
    }
  }
`;

export const Flex = styled.div`
  display: flex;

    ${({ column }) => column && css `
    flex-direction: column;
  `}

  ${({ justify }) => justify && css `
    justify-content: $(justify);
  `}

  ${({ align  }) => align  && css `
    align-content: $(align);
  `}
`

export const ImageContainer = styled.div`
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;