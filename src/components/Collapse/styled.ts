import styled, { css } from 'styled-components';

import { CollapseToggleProps } from './interface';

export const CollapseHeader = styled.div`
  flex-direction: row;
  width: 100%;
  padding-bottom: 0;

  svg {
    width: 2.8rem;
    height: 2.8rem;
    stroke-width: 3px;
    text-shadow: var(--text-shadow);
    transform: rotate(0);
    transition: all 320ms ease-in-out;
  }
`;

export const Text = styled.p`
  position: relative;
  width: 100%;
  font: 400 2.2rem 'Ubuntu', sans-serif;
  text-shadow: var(--text-shadow);
`;

export const CollapseBody = styled.div`
  max-height: 0px;
  overflow: hidden;
  transition: all 400ms ease-in-out;
`;

export const CollapseWrapper = styled.div<CollapseToggleProps>`
  width: 100%;
  padding: 12px 24px;
  box-shadow: var(--box-shadow);
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 3.2rem;

  textarea {
    min-height: 150px;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      ${CollapseHeader} svg {
        transform: rotate(180deg);
        padding-bottom: 12px;
      }

      ${CollapseBody} {
        max-height: 100vh;
        overflow: auto;
      }
    `}
`;
