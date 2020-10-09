import styled, { css } from 'styled-components';

import { ButtonProps } from './interface';

export const ButtonStyled = styled.button<ButtonProps>`
  font-size: 2.4rem;
  line-height: 1;
  padding: 1.2rem 4.8rem;
  box-shadow: var(--box-shadow);
  border-radius: 32px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 300px;
  transition: all 260ms ease-in-out;
  position: relative;

  a {
    font-size: inherit;
    display: block;
    width: 100%;
  }

  svg {
    position: absolute;
    left: 0.4rem;
    top: 50%;
    transform: translateY(-50%);
    bottom: 0;
    background: ${(props) => props.theme.colors.primary};
    box-shadow: var(--box-shadow);
    border-radius: 4rem;
    height: 4rem;
    width: 4rem;
    padding: 0.8rem;
    stroke-width: 3px;
  }

  ${({ color }) => {
    switch (color) {
      case 'primary':
        return css`
          background: ${(props) => props.theme.colors.primary};
          color: ${(props) => props.theme.colors.tertiary};
          font-weight: 500;
          border: 1px solid ${(props) => props.theme.colors.primary};
          transform: scale(1);
          text-shadow: var(--text-shadow);
          box-shadow: var(--box-shadow);

          &:hover,
          &:focus {
            transform: scale(0.98);
          }
        `;
      case 'primary-outline':
        return css`
          background: transparent;
          color: ${(props) => props.theme.colors.tertiary};
          border: 2.5px solid ${(props) => props.theme.colors.primary};
          text-shadow: var(--text-shadow);
          box-shadow: var(--box-shadow);

          &:hover,
          &:focus {
            border-left-width: 7.5px;
            border-right-width: 7.5px;
          }
        `;
    }
  }}
`;
