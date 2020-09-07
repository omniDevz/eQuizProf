import styled, { css } from 'styled-components';
import { StepProps, ConfirmContainerProps } from './interface';

export const Steps = styled.section<StepProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  transition: all 320ms ease-in-out;
  min-height: 51rem;

  ${({ step }) => css`
    article {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      opacity: 0;
      transform: scale(0);
      transition: all 320ms ease-in-out;

      &:nth-child(${step}) {
        transform: scale(1);
        opacity: 1;
      }

      @media (min-width: 768px) {
        left: 50%;
        transform: scale(0) translateX(-50%);

        &:nth-child(${step}) {
          transform: scale(1) translateX(-50%);
        }
      }
    }
  `}
`;

export const ConfirmContainer = styled.div<ConfirmContainerProps>`
  position: absolute;
  top: 120px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 120px;
  background: ${(props) => props.theme.colors.secondary};
  transform: scale(0);
  transition: transform 320ms ease-in-out;

  ${({ registerConfirm }) =>
    registerConfirm &&
    css`
      transform: scale(1);
    `}
`;
