import styled, { css } from 'styled-components';

import ReactSelect from 'react-select';
import { SelectWrapperProps } from './interface';

export const SelectStyled = styled(ReactSelect)`
  flex-direction: row;
  width: 100%;

  div {
    flex-direction: row;
  }

  .react-select__control {
    width: 100%;
    height: 5.2rem;
    background: ${(props) => props.theme.colors.secondary};
    border: 2.5px solid ${(props) => props.theme.colors.primary};
    border-radius: 3.2rem;
    box-shadow: var(--box-shadow);
    padding: 0 1.4rem;

    .react-select__value-container {
      font: 500 1.8rem 'Roboto', sans-serif;
      color: ${(props) => props.theme.colors.tertiaryOpacity64};
      padding: 0;

      .react-select__input,
      .react-select__single-value {
        font: 500 1.8rem 'Roboto', sans-serif;
        color: ${(props) => props.theme.colors.tertiary};
        padding: 0;
      }

      .react-select__placeholder {
        font: 500 1.8rem 'Roboto', sans-serif;
        color: ${(props) => props.theme.colors.tertiaryOpacity64};
        padding: 0;
      }
    }

    .react-select__indicators {
      .react-select__indicator-separator {
        display: none;
      }

      .react-select__indicator {
        color: ${(props) => props.theme.colors.primary};
        padding: 0;

        svg {
          height: 28px;
          width: 28px;
          transition: all 260ms ease-in-out;
        }
      }
    }

    &.react-select__control--menu-is-open {
      z-index: 99;
      .react-select__indicators .react-select__indicator svg {
        transform: rotate(180deg);
      }
    }

    &:hover {
      border: 2.5px solid ${(props) => props.theme.colors.primary};
    }
  }

  .react-select__menu {
    background: ${(props) => props.theme.colors.secondary};
    padding-top: 6rem;
    padding-bottom: 0.8rem;
    margin-top: -5.2rem;
    border: 2.5px solid ${(props) => props.theme.colors.primary};
    border-radius: 3.2rem;
    box-shadow: var(--box-shadow);
    z-index: 9;

    .react-select__menu-list {
      flex-direction: column;
      padding: 0 8px;
      border-radius: 3.2rem;
      width: 100%;

      .react-select__option {
        color: ${(props) => props.theme.colors.tertiary};
        background: ${(props) => props.theme.colors.secondary};
        border-radius: 3.2rem;
        width: inherit;

        &.react-select__option--is-selected,
        &.react-select__option--is-focused {
          background: ${(props) => props.theme.colors.secondary};
          border: 2.5px solid ${(props) => props.theme.colors.primary};
        }
      }
    }
  }
`;

export const Text = styled.label`
  color: ${(props) => props.theme.colors.tertiaryOpacity64};

  height: 2.2rem;
  position: absolute;
  top: 50%;
  left: 0.6rem;
  transform: translateY(-50%);
  z-index: 999;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;

  padding: 0 1.4rem;
  border-radius: 1.2rem;

  transition: 240ms ease-in-out;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    background: ${(props) => props.theme.colors.secondary};
    border: 3px solid ${(props) => props.theme.colors.primary};
    border-radius: 2rem;
    transform: scaleX(0);
    transition: 360ms ease-in-out;
  }
`;

export const SelectWrapper = styled.div<SelectWrapperProps>`
  position: relative;
  width: 100%;

  ${({ hasValue }) =>
    hasValue &&
    css`
      ${Text} {
        color: ${(props) => props.theme.colors.tertiary};
        left: 1.6rem;
        top: 0;
        font-weight: normal;
        transform: scale(0.8) translateY(-1.5rem);

        &:before {
          transform: scaleX(1);
        }
      }
    `}

  &:focus-within {
    ${Text} {
      color: ${(props) => props.theme.colors.tertiary};
      left: 1.6rem;
      top: 0;
      font-weight: normal;
      transform: scale(0.8) translateY(-1.5rem);

      &:before {
        transform: scaleX(1);
      }
    }
  }
`;
