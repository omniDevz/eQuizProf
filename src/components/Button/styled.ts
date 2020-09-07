import styled, { css } from 'styled-components';

import { ButtonProps } from './interface';

export const ButtonStyled = styled.button<ButtonProps>`
  font-size: 2.4rem;
  line-height: 1;
  padding: 1.2rem 2.4rem;
  box-shadow: var(--box-shadow);
  border-radius: 32px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 300px;
  transition: all 260ms ease-in-out;

  a {
    font-size: inherit;
    display: block;
    width: 100%;
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
